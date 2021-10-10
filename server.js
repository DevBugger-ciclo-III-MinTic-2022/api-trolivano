//hacer el import antes
//const express = require('express');
import Express from 'express';
import { MongoClient, ObjectId } from 'mongodb';
import Cors from 'cors';

const stringConexion = 
    'mongodb+srv://aarivera:Matias.1991@proyectomintic.b7g1g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const client = new MongoClient(stringConexion, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

let conexion;

const app = Express();
//Extrae la info y me entrega los datos que necesito
app.use(Express.json());
app.use(Cors());

//Agregar rutas al servidor
app.get('/productos', (req, res) => {
    console.log('Alguien hizo get');
    conexion
    .collection('producto')
    .find({}).limit(50)
    .toArray((err, result)=>{
        if(err){
            res.status(500).send('Error consultando los productos');
        } else {
            res.json(result);
        }
    });
});
//Para crear un nuevo producto en la BD
//Ruta tipo POST
app.post('/productos/nuevo', (req, res) => {
    //req.body es un objeto por lo tanto puedo pedir la llave:valor
   const datosProducto = req.body;
   console.log('llaves', Object.keys(datosProducto));
   try {
    if(
        Object.keys(datosProducto).includes('nombre') && 
        Object.keys(datosProducto).includes('cantidad') &&  
        Object.keys(datosProducto).includes('precio')
    )  {
        //implementar codigo para crear producto en la BD
        conexion.collection('producto').insertOne(datosProducto, (err, result)=>{
            if(err) {
                console.error(err);
                res.sendStatus(500);
            } else {
                console.log(result);
                res.sendStatus(200);
            }
        });
    } else {
        res.sendStatus(500);
    } 
   } catch (error) {
    res.sendStatus(500);
   }
    
    //imprime lo que hay en el req convertido en jason   
    //res.send("Producto creado");
});

app.patch('/productos/editar',(req,res)=>{
    const edicion = req.body;
    const filtroProducto = {_id: new ObjectId(edicion.id)}
    //si hago envio del id por el body tengo que hacer esto:
    delete edicion.id;
    const operacion = {
        $set: edicion,
    };
    conexion.collection('producto')
    .findOneAndUpdate(filtroProducto,operacion,{upsert: true, returnOriginal: true}, (err, result)=>{
        if(err) {
            console.error('Error actualizando el producto: ', err),
            res.sendStatus(500);
        } else {
            console.log('Actualizado con éxito');
            res.sendStatus(200);
        }
    });
});

app.delete('/productos/eliminar', (req,res) =>{
    const filtroProducto = {_id : new ObjectId(req.body.id)};
    conexion.collection('producto').deleteOne(filtroProducto, (err, result)=>{
        if(err) {
            console.error(500);
            res.sendStatus(500);
        } else {
            res.sendStatus(200);
        }
    });
});

//este main primero se va a conectar a la BD y luego 
//retorna ese app.listen
const main = ()=>{

    client.connect((err, db)=>{
        if(err){
            console.error("Error, conectado a la BD");
        }
        conexion = db.db('Troliviano');
        console.log("Conexion Exitosa");
        return app.listen(5000,()=>{
            console.log("Escuchando puerto 5000");
        }); 
    });
};

main();