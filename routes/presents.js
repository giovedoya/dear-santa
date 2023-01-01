const express = require('express');
const router = express.Router();
const Present = require('../model/present');

/* GET all presents page. */
/* ROUTE presents*/
router.get('/', async function (req, res, next) {
    try {
        const presents = await Present.find({});
        res.render('presents', { presents });
    } catch (error) {
        next(error)
    }
});
/* GET search */
/* ROUTE presents/search*/
router.get('/search', async function (req, res, next){
    const { name } = req.query;
    res.render('search', { query: title });
//     const { presentsId } = req.params;
//     try {
//       const present = await Present.findById(presentsId)
//       res.render('presentDetail', present);
//   } catch (error) {
//     next(error)  
//   }   
  })

/* GET form view */
/* ROUTE presents/new*/
router.get('/new', function (req, res, next){
    res.render('newPresent');
  })

/* POTS get users presents inputs. */
/* ROUTE presents/news*/
router.post('/new', async function (req, res, next) {
  const { name, image, price, recipient, description } = req.body;
  try {
      const createdPresent = await Present.create({ name, image, price, recipient, description });
      res.redirect(`/presents/${createdPresent._id}`);
  } catch (error) {
      next(error)
  }
}); 

/* GET one presents page. */
/* ROUTE presents/:presentsId */
router.get('/:presentsId', async function (req, res, next){
    const { presentsId } = req.params;
    try {
      const present = await Present.findById(presentsId)
      res.render('presentDetail', present);
  } catch (error) {
    next(error)  
  }   
  });
  

module.exports = router;
