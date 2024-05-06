const express = require("express");
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require("../middleware/multer-config");
const bookCtrl = require("../controllers/book");


router.post('/', auth,multer, sharp, bookCtrl.createBook ); 
router.put("/:id",auth,multer, sharp, bookCtrl.modifyBook);
router.delete ("/:id",auth, bookCtrl.deleteBook); 
router.post("/:id/rating", auth, bookCtrl.giveRating);
router.get("/bestrating", bookCtrl.bestRating);
router.get('/', bookCtrl.getAllBooks);
router.get("/:id", bookCtrl.getOneBook);

module.exports = router;    