const express = require("express");
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const postsCtrl = require("../controllers/posts");

router.post("/",   auth, multer, postsCtrl.createPost);
router.get("/:id", auth, postsCtrl.getOnePost);
router.get("/", auth, postsCtrl.getAllPost);
router.put("/:id", auth, multer, postsCtrl.modifyPost);
router.delete("/:id",  postsCtrl.deletePost);


module.exports = router;