import {sequelize} from '../configuration/database.js';
import {DataTypes} from "sequelize";

const Author = sequelize.define('author', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        validate: {
            notEmpty: true
        }
    },
    birth_date:{
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
},{
    tableName: 'authors',
})

export default Author;