let express = require('express');
let router = express.Router();
let controller = require('../controllers/mainController');


/* GET  */
router.get('/', controller.index);



module.exports = router;