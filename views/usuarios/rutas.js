import Express from 'express';
import { queryUsuario, 
    crearUsuario, 
    consultarUsuario, 
    editarUsuario, 
    eliminarUsuario} from '../../controlador/usuarios/controlador.js'

const rutasUsuarios = Express.Router();

const genericoCallback = (res) => (err, result) => {
    if (err) {
      res.status(500).send('Error consultando los usuarios');
    } else {
      res.json(result);
    }
  };

rutasUsuarios.route('/usuarios').get((req, res) => {
    console.log('Alguien hizo get en la ruta /usuarios');
    queryUsuario(genericoCallback(res));
});

rutasUsuarios.route('/usuarios').post((req, res) => {
    //req.body es un objeto por lo tanto puedo pedir la llave:valor
   crearUsuario(req.body, genericoCallback(res));
});

rutasUsuarios.route('/usuarios/:id').get((req, res) => {
    console.log('alguien hizo get en la ruta /usuarios');
    consultarUsuario(req.params.id, genericoCallback(res));
  });

rutasUsuarios.route('/usuarios/:id').patch((req,res)=>{
    editarUsuario(req.params.id, req.body, genericoCallback(res));
});

rutasUsuarios.route('/usuarios/:id').delete((req,res) =>{
   eliminarUsuario(req.params.id, genericoCallback(res));
});

export default rutasUsuarios;