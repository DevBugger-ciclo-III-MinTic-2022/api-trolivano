import { ObjectId } from 'mongodb';
import { getBD} from '../../db/db.js';

const queryProductos = async (callback) => {
  const conexion = getBD();
  await conexion.collection('producto').find({}).limit(50).toArray(callback);
};

const crearProducto = async (datosProducto, callback) => {
    const conexion = getBD();
    // implementar código para crear vehículo en la BD
    await conexion.collection('producto').insertOne(datosProducto, callback);
};

const consultarProducto = async (id, callback) => {
  const conexion = getBD();
  await conexion.collection('producto').findOne({ _id: new ObjectId(id) }, callback);
};

const editarProducto = async (id, edicion, callback) => {
  const filtroProducto = { _id: new ObjectId(id) };
  const operacion = {
    $set: edicion,
  };
  const conexion = getBD();
  await conexion
    .collection('producto')
    .findOneAndUpdate(filtroProducto, operacion, { upsert: true, returnOriginal: true }, callback);
};

const eliminarProducto = async (id, callback) => {
  const filtroProducto = { _id: new ObjectId(id) };
  const conexion = getBD();
  await conexion.collection('producto').deleteOne(filtroProducto, callback);
};

export { queryProductos, crearProducto, consultarProducto, editarProducto, eliminarProducto };