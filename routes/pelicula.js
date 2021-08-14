const express = require('express');

const router = express.Router();


const peliculaCtrl = require('../controllers/pelicula');

router.get('/', peliculaCtrl.getAllPeliculas);

router.post('/', peliculaCtrl.createPelicula);

router.get('/:id', peliculaCtrl.getOnePelicula);

router.get('/search/:value', peliculaCtrl.searchPeliculas);

router.put('/:id', peliculaCtrl.modifyPelicula);

router.delete('/:id', peliculaCtrl.deletePelicula);

module.exports = router;