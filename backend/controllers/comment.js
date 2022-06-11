exports.createCom = (req, res, next) => {
    const comObject = JSON.parse(req.body.com);
    delete comObject._id;
    const com = new Com({
      ...comObject,
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
    com
      .save()
      .then(() => res.status(201).json({ message: "Commentaire publié!" }))
      .catch((error) => res.status(400).json({ error }));
    
  };
  
 
  exports.getOneCom = (req, res, next) => {
    Com.findOne({ _id: req.params.id })
      .then((com) => res.status(200).json(com))
      .catch((error) => res.status(404).json({ error }));
    
  };
  
  
  exports.getAllCom = (req, res, next) => {
    Com.find()
      .then((comments) => res.status(200).json(comments))
      .catch((error) => res.status(400).json({ error }));
    
  };
  

  exports.modifyCom = (req, res, next) => {
    const comObject = req.file
      ? {
        ...JSON.parse(req.body.com),
        imageUrl: `${req.protocol}://${req.get("host")}/images/${req.file.filename
          }`,
      }
      : { ...req.body };
    Com.findOneAndUpdate(
      { _id: req.params.id },
      { ...postObject, _id: req.params.id }
    )
      .then((old) => {
        let oldUrl = old.imageUrl.split('/images/')[1]
        fs.unlink(`images/${oldUrl}`, (err) => {
          if (err) throw err
        })
        res.status(200).json({ message: "Commentaire modifié!" })
      })
      .catch((error) => res.status(400).json({ error }));
  };
  
  
  exports.deleteCom = (req, res, next) => {
    Com.findOne({ _id: req.params.id })
      .then((com) => {
        const filename = post.imageUrl.split("/images/")[1];
        fs.unlink(`images/${filename}`, () => {
          Com.deleteOne({ _id: req.params.id })
            .then(() => res.status(200).json({ message: "Commentaire supprimé!" }))
            .catch((error) => res.status(400).json({ error }));
        });
      })
      .catch((error) => res.status(500).json({ message: error }));    
  };
  
  
  exports.likesDislikes = (req, res, next) => {
    if (req.body.like === 1) {  
     Com.findOne({ _id: req.params.id })
        .then(post => { 
          if (com.usersLiked.includes(req.body.userId)) {
          Com.findOneAndUpdate( {_id:req.params.id}, { $inc: { likes: 0 } })
           .then(() => res.status(200).json({ message: `J'aime ce commentaire!`}))
           .catch(error => res.status(400).json({ error }));
          }else{
           Com.findOneAndUpdate( {_id:req.params.id}, { $push: { usersLiked: req.body.userId }, $inc: { likes: +1 } })
           .then(() => res.status(200).json({ message: `J'aime ce commentaire!`}))
           .catch(error => res.status(400).json({ error }));
          }});
  
    } else if (req.body.like === -1) {  
      Post.findOne({ _id: req.params.id })
      .then(com => {
          if (com.usersLiked.includes(req.body.userId)) {
            Com.findOneAndUpdate( {_id:req.params.id}, { $inc: { dislikes: 0 } })
              .then(() => res.status(200).json({ message: `Je n'aime déjà pas ce commentaire !`}))
              .catch(error => res.status(400).json({ error }))
          }else{
            Com.findOneAndUpdate( {_id:req.params.id}, { $push: { usersDisliked: req.body.userId }, $inc: { dislikes: +1 } })
              .then(() => res.status(200).json({ message: `Je n'aime pas ce commentaire!`}))
              .catch(error => res.status(400).json({ error }));
      }})
  
  } else {  
      Com.findOne({ _id: req.params.id })
        .then(post => {
          if (com.usersLiked.includes(req.body.userId)) {
            Com.findOneAndUpdate( {_id:req.params.id}, { $pull: { usersLiked: req.body.userId }, $inc: { likes: -1 } })
              .then(() => res.status(200).json({ message: `Je n'ai pas donné mon avis sur ce commentaire!`}))
              .catch(error => res.status(400).json({ error }))
          } else if (com.usersDisliked.includes(req.body.userId)) {
            Com.findOneAndUpdate( {_id:req.params.id}, { $pull: { usersDisliked: req.body.userId }, $inc: { dislikes: -1 } })
              .then(() => res.status(200).json({ message: `Je n'ai pas donné mon avis sur ce commentaire!`}))
              .catch(error => res.status(400).json({ error }))
          }
        })
        .catch(error => res.status(400).json({ error }));
      }}