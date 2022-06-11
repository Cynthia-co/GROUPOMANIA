exports.createPost = (req, res, next) => {
    const postObject = JSON.parse(req.body.post);
    delete postObject._id;
    const post = new Post ({
      ...postObject,
      //Récupérer l'image
      imageUrl: `${req.protocol}://${req.get("host")}/images/${
        req.file.filename
      }`,
      //initialiser les valeurs de like et dislike 
      likes: 0,
      dislikes: 0,
      usersLiked: [],
      usersdisLiked: []
    });
    post
      .save()
      .then(() => res.status(201).json({ message: "Post publié!" }))
      .catch((error) => res.status(400).json({ error }));
    
  };
  
 
  exports.getOnePost = (req, res, next) => {
    Post.findOne({ _id: req.params.id })
      .then((post) => res.status(200).json(post))
      .catch((error) => res.status(404).json({ error }));
    
  };
  
  
  exports.getAllPost = (req, res, next) => {
    Sauce.find()
      .then((posts) => res.status(200).json(posts))
      .catch((error) => res.status(400).json({ error }));
    
  };
  

  exports.modifyPost = (req, res, next) => {
    const postObject = req.file
      ? {
        ...JSON.parse(req.body.post),
        imageUrl: `${req.protocol}://${req.get("host")}/images/${req.file.filename
          }`,
      }
      : { ...req.body };
    Post.findOneAndUpdate(
      { _id: req.params.id },
      { ...postObject, _id: req.params.id }
    )
      .then((old) => {
        let oldUrl = old.imageUrl.split('/images/')[1]
        fs.unlink(`images/${oldUrl}`, (err) => {
          if (err) throw err
        })
        res.status(200).json({ message: "Post modifié!" })
      })
      .catch((error) => res.status(400).json({ error }));
  };
  
  
  exports.deletePost = (req, res, next) => {
    Post.findOne({ _id: req.params.id })
      .then((post) => {
        const filename = post.imageUrl.split("/images/")[1];
        fs.unlink(`images/${filename}`, () => {
          Post.deleteOne({ _id: req.params.id })
            .then(() => res.status(200).json({ message: "Post supprimé!" }))
            .catch((error) => res.status(400).json({ error }));
        });
      })
      .catch((error) => res.status(500).json({ message: error }));    
  };
  
  
  exports.likesDislikes = (req, res, next) => {
    if (req.body.like === 1) {  
     Post.findOne({ _id: req.params.id })
        .then(post => { 
          if (post.usersLiked.includes(req.body.userId)) {
          Post.findOneAndUpdate( {_id:req.params.id}, { $inc: { likes: 0 } })
           .then(() => res.status(200).json({ message: `J'aime ce post!`}))
           .catch(error => res.status(400).json({ error }));
          }else{
           Post.findOneAndUpdate( {_id:req.params.id}, { $push: { usersLiked: req.body.userId }, $inc: { likes: +1 } })
           .then(() => res.status(200).json({ message: `J'aime ce post!`}))
           .catch(error => res.status(400).json({ error }));
          }});
  
    } else if (req.body.like === -1) {  
      Post.findOne({ _id: req.params.id })
      .then(post => {
          if (post.usersLiked.includes(req.body.userId)) {
            Post.findOneAndUpdate( {_id:req.params.id}, { $inc: { dislikes: 0 } })
              .then(() => res.status(200).json({ message: `Je n'aime déjà pas ce post !`}))
              .catch(error => res.status(400).json({ error }))
          }else{
            Post.findOneAndUpdate( {_id:req.params.id}, { $push: { usersDisliked: req.body.userId }, $inc: { dislikes: +1 } })
              .then(() => res.status(200).json({ message: `Je n'aime pas ce post!`}))
              .catch(error => res.status(400).json({ error }));
      }})
  
  } else {  
      Post.findOne({ _id: req.params.id })
        .then(post => {
          if (post.usersLiked.includes(req.body.userId)) {
            Post.findOneAndUpdate( {_id:req.params.id}, { $pull: { usersLiked: req.body.userId }, $inc: { likes: -1 } })
              .then(() => res.status(200).json({ message: `Je n'ai pas donné mon avis sur ce post!`}))
              .catch(error => res.status(400).json({ error }))
          } else if (post.usersDisliked.includes(req.body.userId)) {
            Post.findOneAndUpdate( {_id:req.params.id}, { $pull: { usersDisliked: req.body.userId }, $inc: { dislikes: -1 } })
              .then(() => res.status(200).json({ message: `Je n'ai pas donné mon avis sur ce post!`}))
              .catch(error => res.status(400).json({ error }))
          }
        })
        .catch(error => res.status(400).json({ error }));
      }}