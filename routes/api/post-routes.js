const { Post } = require('../../models');
const router = require('express').Router();

// Get all Posts

router.get('/', (req, res) => {
    Post.findAll()
    .then(dbPostData => {
        res.json(dbPostData)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err);
    });
});

// Create Post
router.post('/', (req, res) => {
    Post.create({
        title: req.body.title,
        notes: req.body.notes
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;
