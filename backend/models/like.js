module.exports = (sequelize, DataTypes) => {
    return sequelize.define('like', {
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
    },{
        timestamps: true,
        createdAt: true,
        updatedAt: true
        })
};