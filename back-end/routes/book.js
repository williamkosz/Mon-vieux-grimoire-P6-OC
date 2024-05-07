const express = require("express");
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require("../middleware/multer-config");
const bookCtrl = require("../controllers/book");


router.post('/', auth, multer, multer.optimizeImage, bookCtrl.createBook ); 
router.put("/:id",auth,multer, multer.optimizeImage, bookCtrl.modifyBook);
router.delete ("/:id",auth, bookCtrl.deleteBook); 
router.get('/', bookCtrl.getAllBooks);
router.get("/:id", bookCtrl.getOneBook);

module.exports = router;    