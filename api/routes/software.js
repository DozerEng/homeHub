const express = require('express');
const router = express.Router();

const SoftwareController = require("../controllers/software");

router.get('/:pageId', SoftwareController.software_get_page_content);

module.exports = router;