const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Skill model
class Skill extends Model {}

// create fields/columns for Skill model
Skill.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        skill_name: {
            type: DataTypes.STRING,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'skill'
    }
);

module.exports = Skill;