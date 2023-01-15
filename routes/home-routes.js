const router = require('express').Router();

const sequelize = require('../config/connection');
const { Post, User } = require('../models');

router.get('/', (req, res) => {
    Post.findAll({
      attributes: [
        'id',
        'title',
        'notes',
        'createdAt',
      ]
    })
      .then(dbPostData => {
        console.log(dbPostData[0]);
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('homepage', { posts });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;