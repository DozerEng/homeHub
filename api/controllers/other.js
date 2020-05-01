const path = require("path");
const fs = require("fs");

exports.other_get_page_content = (req, res, next) => {

    const contentPath = path.join(__dirname + "/../../public/other/" + req.params.pageId);

    if (fs.existsSync(contentPath)) { //check for pages existence
        res.status(200).sendFile(contentPath);
    } else {
        res.status(200).sendFile(path.join(__dirname + "/../../public/misc/notFound.html"));
    }
}