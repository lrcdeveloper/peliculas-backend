const Pelicula = require('../models/pelicula');

exports.createPelicula = (req, res, next) => {

//   Para guardar con imagen
//   req.body.pelicula = JSON.parse(req.body.pelicula);
//   const url = req.protocol + '://' + req.get('host');

  const pelicula = new Pelicula({
    titulo: req.body.titulo,
    anio: req.body.anio,
    portada: req.body.portada,
    calificacion: req.body.calificacion
    
  });
  pelicula.save().then(
    (result) => {
      res.status(201).json({
          data: result,
        message: 'Pelicula saved successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.searchPeliculas = (req, res, next) => {
  Pelicula.find(
    { "titulo": { "$regex": req.params.value, "$options": "i" } }).sort({'_id': -1}).then(
    (pelicula) => {
      res.status(200).json(pelicula);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.getOnePelicula = (req, res, next) => {
  Pelicula.findOne({
    _id: req.params.id
  }).then(
    (pelicula) => {
      res.status(200).json(pelicula);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.modifyPelicula = (req, res, next) => {
  
   let pelicula = {
      _id: req.params.id,
      titulo: req.body.titulo,
      anio: req.body.anio,
      portada: req.body.portada,
      calificacion: req.body.calificacion
    };
  
  Pelicula.updateOne({_id: req.params.id}, pelicula).then(
    () => {
      res.status(201).json({
        message: 'Pelicula updated successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.deletePelicula = (req, res, next) => {
  Pelicula.findOne({_id: req.params.id}).then(
    (pelicula) => {
        Pelicula.deleteOne({_id: req.params.id}).then(
          () => {
            res.status(200).json({
              message: 'Deleted!'
            });
          }
        ).catch(
          (error) => {
            res.status(400).json({
              error: error
            });
          }
        );
    }
  );
};

exports.getAllPeliculas = (req, res, next) => {
  Pelicula.find().sort({'_id': -1}).then(
    (peliculas) => {
      res.status(200).json(peliculas);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};