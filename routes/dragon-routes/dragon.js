  
const express = require("express");
const router = express.Router();
const Dragon = require("../../models/Dragon");
const uploadCloud = require("../../config/cloudinary-setup");

/* Dragon Home Page */
router.get("/", (req, res, next) => {
    Dragon.find()
        .then(allDragonsFromDB => {
            res.render("dragons/dragons-home", { dragons: allDragonsFromDB });
        })
        .catch(err => next(err));
});

// our create route for the new dragon
router.post("/create", uploadCloud.single("image"), (req, res, next) => {
    console.log({ body: req.body, file: req.file });
    const dragonInputInfo = req.body;
    dragonInputInfo.image = req.file.url;
    Dragon.create(dragonInputInfo)
        .then(newlyCreatedDragon => {
            console.log({ newlyCreatedDragon });

            res.redirect("back");
        })
        .catch(err => next(err));
});

module.exports = router;