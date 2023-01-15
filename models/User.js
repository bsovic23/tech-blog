const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Creating the User Model

class User extends Model {}

// Defining User model

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize,              // imported sequelize connnection
        timestamps: true,        //  create createdAt/updatedAt timestamp fields
        freezeTableName: true,   // no duplicate table names
        underscored: true,      // use underscore casing instead of camelcasing
        modelName: 'user'       // name of the model, keep lowercase
    }
);

module.exports = User;