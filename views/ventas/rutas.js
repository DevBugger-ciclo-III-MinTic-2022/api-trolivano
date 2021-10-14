import Express from 'express';
import { queryVentas, 
    crearVenta, 
    consultarVenta,
    editarVenta, 
eliminarVenta} from '../../controlador/ventas/controlador.js'

const rutasVentas = Express.Router();

const genericoCallback = (res) => (err, result) => {
    if (err) {
      res.status(500).send('Error consultando las ventas');
    } else {
      res.json(result);
    }
  };

rutasVentas.route('/ventas').get((req, res) => {
    console.log('Alguien hizo get en la ruta /Ventas');
    queryVentas(genericoCallback(res));
});

rutasVentas.route('/ventas').post((req, res) => {
   crearVenta(req.body, genericoCallback(res));
});

rutasVentas.route('/ventas/:id').get((req, res) => {
    console.log('alguien hizo get en la ruta /Ventas');
    consultarVenta(req.params.id, genericoCallback(res));
  });

rutasVentas.route('/ventas/:id').patch((req,res)=>{
    editarVenta(req.params.id, req.body, genericoCallback(res));
});

rutasVentas.route('/ventas/:id').delete((req,res) =>{
   eliminarVenta(req.params.id, genericoCallback(res));
});

export default rutasVentas;