const express = require('express');
const router = express.Router();

const ProjectsController = require("../controllers/projects");

router.get('/:pageId', ProjectsController.projects_get_page_content);

module.exports = router;