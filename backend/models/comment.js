module.exports = (sequelize, DataTypes) =>{
    return sequelize.define('comment', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    },
},{
    timestamps: true,
    createdAt: true,
    updatedAt: true
    })
};