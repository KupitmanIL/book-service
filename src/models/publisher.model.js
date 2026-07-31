import {sequelize} from '../configuration/database.js';
import {DataTypes} from "sequelize";

const Publisher = sequelize.define('publiser', {
    publisher_name: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        validate: {
            notEmpty: true
        }
    }
},{
    tableName: 'publishers'
})

export default Publisher;