const express = require('express');
const router = express.Router();
const Dragon = require('../../models/Dragon')

/* GET Dragon home page */
router.get('/', (req, res, next) => {
  res.render('dragons/dragons-home');
});


// our create route for the new dragon
router.post('/create', (req, res, next) => {
  console.log(req.body);

  const dragonInputInfo = req.body;
  // dragonInputInfo.image = req.file.url;

  Dragon.create(dragonInputInfo)
    .then(newlyCreatedDragon => {
      console.log({
        newlyCreatedDragon
      });

      res.redirect('back');
    })
    .catch(err => next(err));
});


module.exports = router;