import { ObjectId } from 'mongodb';
import { getBD } from '../../db/db.js';

const queryUsuario = async (callback) => {
  const conexion = getBD();
  console.log('query');
  await conexion.collection('usuario').find({}).limit(50).toArray(callback);
};

const crearUsuario = async (datosUsuario, callback) => {
  const conexion = getBD();
  await conexion.collection('usuario').insertOne(datosUsuario, callback);
};

const consultarUsuario = async (id, callback) => {
  const conexion = getBD();
  await conexion.collection('usuario').findOne({ _id: new ObjectId(id) }, callback);
};

const editarUsuario = async (id, edicion, callback) => {
  const filtroUsuario = { _id: new ObjectId(id) };
  const operacion = {
    $set: edicion,
  };
  const conexion = getBD();
  await conexion
    .collection('usuario')
    .findOneAndUpdate(filtroUsuario, operacion, { upsert: true, returnOriginal: true }, callback);
};

const eliminarUsuario = async (id, callback) => {
  const filtroUsuario = { _id: new ObjectId(id) };
  const conexion = getBD();
  await conexion.collection('usuario').deleteOne(filtroUsuario, callback);
};

export { queryUsuario, crearUsuario, consultarUsuario, editarUsuario, eliminarUsuario };