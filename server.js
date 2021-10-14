import Express from 'express';
import { conectarBD } from './db/db.js';
import Cors from 'cors';
import dotenv from 'dotenv';
import rutasProductos from './views/productos/rutas.js';
import rutasUsuarios from './views/usuarios/rutas.js'
import rutasVentas from './views/ventas/rutas.js';

dotenv.config({path: './.env'});

const app = Express();
//Extrae la info y me entrega los datos que necesito
app.use(Express.json());
app.use(Cors());
app.use(rutasProductos);
app.use(rutasUsuarios);
app.use(rutasVentas)

//este main primero se va a conectar a la BD y luego 
//retorna ese app.listen
const main = () => {
    return app.listen(process.env.PORT,()=>{
    console.log(`Escuchando puerto ${process.env.PORT}`);
    });
};

conectarBD(main);