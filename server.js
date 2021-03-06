import Express from 'express';
import { conectarBD } from './db/db.js';
import Cors from 'cors';
import dotenv from 'dotenv';
import jwt from 'express-jwt';
import jwks from 'jwks-rsa';
import rutasProductos from './views/productos/rutas.js';
import rutasUsuarios from './views/usuarios/rutas.js'
import rutasVentas from './views/ventas/rutas.js';
import autorizacionEstadoUsuario from './middelware/autorizacionEstadoUsuario.js';

dotenv.config({path: './.env'});

const port = process.env.PORT || 5000;

const app = Express();
//Extrae la info y me entrega los datos que necesito
app.use(Express.json());
app.use(Cors());

var jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://misiontic-troliviano.us.auth0.com/.well-known/jwks.json'
  }),
  audience: 'api-autenticacion-troliviano-mintic',
  issuer: 'https://misiontic-troliviano.us.auth0.com/',
  algorithms: ['RS256'],
});

app.use(jwtCheck);

app.use(autorizacionEstadoUsuario);

app.use(rutasProductos);
app.use(rutasUsuarios);
app.use(rutasVentas)

//este main primero se va a conectar a la BD y luego 
//retorna ese app.listen
const main = () => {
    return app.listen(port,()=>{
    console.log(`Escuchando puerto ${port}`);
    });
};

conectarBD(main);