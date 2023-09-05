const express = require('express');
const charactersCtrl = require('../controllers/characters');
const router = express.Router()


router.get('/characters', charactersCtrl.list);
router.get('/search', charactersCtrl.search);
router.get('/:id', charactersCtrl.show);


module.exports = router;