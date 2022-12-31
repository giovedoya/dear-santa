const express = require('express');
const router = express.Router();
const Present = require('../model/present');

/* GET presents page. */
/* ROUTE presents*/
router.get('/', async function (req, res, next) {
    try {
        const presents = await Present.find({});
        res.render('presents', { presents });
    } catch (error) {
        next(error)
    }
});

router.get('/:presentsId', async function (req, res, next){
    const { presentsId } = req.params;
    try {
      const present = await Present.findById(presentsId)
      res.render('presentDetail', present);
  } catch (error) {
    next(error)  
  }   
  })

module.exports = router;
