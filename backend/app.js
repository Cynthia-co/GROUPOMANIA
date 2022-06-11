const express = require('express');
const db = require('./config/database');
const { Sequelize, DataTypes } = require('sequelize');
/*const usersRoutes = require('./routes/users');*/
const app = express();
const UserModel = require('./models/user');
const PostModel = require('./models/post');
const CommentModel = require('./models/comment');
const LikeModel = require('./models/like');



db.authenticate()
    .then(res => console.log('Vous êtes bien connecté à la base de données'))
    .catch(error => console.log('La connexion à la base de données a échouée'))
    
const User = UserModel(db, DataTypes);
const Post = PostModel(db, DataTypes);
const Comment = CommentModel(db, DataTypes);
const Like = LikeModel(db, DataTypes);
    
db.sync({ force: true })
    .then(res =>console.log('La base de données a bien été créée!'))

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, PATCH, OPTIONS");
    next();});

/*app.use('/api/auth', usersRoutes);*/

module.exports = app;