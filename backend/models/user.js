module.exports = (sequelize, DataTypes) =>{
    return sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    surname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pseudo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
        admin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        allowNull: false
    }
},{
        timestamps: true,
        createdAt: true,
        updatedAt: true
      })
};