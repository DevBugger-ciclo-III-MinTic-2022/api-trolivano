import { ObjectId } from 'mongodb';
import { getBD } from '../../db/db.js';

const queryVentas = async (callback) => {
  const conexion = getBD();
  console.log('query');
  await conexion.collection('venta').find({}).limit(50).toArray(callback);
};

const crearVenta = async (datosVenta, callback) => {
  const conexion = getBD();
  await conexion.collection('venta').insertOne(datosVenta, callback);
};

const consultarVenta = async (id, callback) => {
  const conexion = getBD();
  await conexion.collection('venta').findOne({ _id: new ObjectId(id) }, callback);
};

const editarVenta = async (id, edicion, callback) => {
  const filtroVenta = { _id: new ObjectId(id) };
  const operacion = {
    $set: edicion,
  };
  const conexion = getBD();
  await conexion
    .collection('venta')
    .findOneAndUpdate(filtroVenta, operacion, { upsert: true, returnOriginal: true }, callback);
};

const eliminarVenta = async (id, callback) => {
  const filtroVenta = { _id: new ObjectId(id) };
  const conexion = getBD();
  await conexion.collection('venta').deleteOne(filtroVenta, callback);
};

export { queryVentas, crearVenta, consultarVenta, editarVenta, eliminarVenta};