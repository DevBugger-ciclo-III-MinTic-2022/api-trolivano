import Express from 'express';
import { queryProductos, 
    crearProducto, 
    consultarProducto, 
    editarProducto, 
    eliminarProducto } from '../../controlador/productos/controlador.js';

const rutasProductos = Express.Router();

const genericoCallback = (res) => (err, result) => {
    if (err) {
        console.log('error', err);
        res.status(500).json({error: err});
      } else {
        res.json(result);
      }
};

rutasProductos.route('/productos').get((req, res) => {
    console.log('Alguien hizo get en la ruta /productos');
    queryProductos(genericoCallback(res));
});
//Para crear un nuevo producto en la BD
//Ruta tipo POST
rutasProductos.route('/productos').post((req, res) => {
    //req.body es un objeto por lo tanto puedo pedir la llave:valor
   crearProducto(req.body, genericoCallback(res));
});

rutasProductos.route('/productos/:id').get((req, res)=>{
    console.log('Alguien hizo get en la ruta /productos')
    consultarProducto(req.params.id, genericoCallback(res))
})

rutasProductos.route('/productos/:id').patch((req,res)=>{
    editarProducto(req.params.id, req.body, genericoCallback(res))
});

rutasProductos.route('/productos/:id').delete((req,res) =>{
    eliminarProducto(req.params.id, genericoCallback(res))   
});

export default rutasProductos;