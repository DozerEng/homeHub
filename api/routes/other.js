const express = require('express');
const router = express.Router();

const OtherController = require("../controllers/other");

router.get('/:pageId', OtherController.other_get_page_content);

module.exports = router;