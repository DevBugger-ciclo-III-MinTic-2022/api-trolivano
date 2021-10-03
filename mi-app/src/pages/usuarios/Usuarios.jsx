import React from 'react';
import { Link } from 'react-router-dom';
import home from 'media/home.png';

const Usuarios = () => {
    return <div>
        <Link to='/'>
            <img src={home}  alt='imagen' className='h-9 w-9 mx-3 my-3 cursor-pointer hover:text-blue-600'/>    
        </Link>
        <div className='flex w-2/4 mx-auto my-5'>
            <h2 className='text-green-500 mx-5'>Lista de Usuarios</h2>
            <button className='border-2 border-green-600 rounded-full p-2 text-green-600'>Agregar usuario</button>
        </div>
        <table className='w-2/4 bg-green-100 justify-between mx-auto my-20 border-collapse border-2 border-green-600'>
            <tr>
                <th className='border-2 border-green-600 text-center'>ID</th>
                <th className='border-2 border-green-600 text-center'>Nombre</th>
                <th className='border-2 border-green-600 text-center'>Correo</th>
                <th className='border-2 border-green-600 text-center'>Rol</th>
                <th className='border-2 border-green-600 text-center'>Acciones</th>
            </tr>
            <tr>
                <td className='border-2 border-green-600 text-center'>1</td>
                <td className='border-2 border-green-600 text-center'>Angie Rivera</td>
                <td className='border-2 border-green-600 text-center'>angierivera@gmail.com</td>
                <td className='border-2 border-green-600 text-center'>Administrador</td>
                <td className='border-2 border-green-600 text-center'>Editar/Eliminar</td>
            </tr>
            <tr>
                <td className='border-2 border-green-600 text-center'>2</td>
                <td className='border-2 border-green-600 text-center'>Santiago Villa</td>
                <td className='border-2 border-green-600 text-center'>santivilla@gmail.com</td>
                <td className='border-2 border-green-600 text-center'>Supervisor</td>
                <td className='border-2 border-green-600 text-center'>Editar/Eliminar</td>
            </tr>
            <tr>
                <td className='border-2 border-green-600 text-center'>3</td>
                <td className='border-2 border-green-600 text-center'>Pepito Perez</td>
                <td className='border-2 border-green-600 text-center'>pepitoperez@gmail.com</td>
                <td className='border-2 border-green-600 text-center'>Vendedor</td>
                <td className='border-2 border-green-600 text-center'>Editar/Eliminar</td>
            </tr>
            <tr>
                <td className='border-2 border-green-600 text-center'>4</td>
                <td className='border-2 border-green-600 text-center'>Jeronimo Correa</td>
                <td className='border-2 border-green-600 text-center'>jerocorrea@gmail.com</td>
                <td className='border-2 border-green-600 text-center'>Vendedor</td>
                <td className='border-2 border-green-600 text-center'>Editar/Eliminar</td>
            </tr>
            <tr>
                <td className='border-2 border-green-600 text-center'>5</td>
                <td className='border-2 border-green-600 text-center'>Juan Rodriguez</td>
                <td className='border-2 border-green-600 text-center'>juanro20@gmail.com</td>
                <td className='border-2 border-green-600 text-center'>Supervisor</td>
                <td className='border-2 border-green-600 text-center'>Editar/Eliminar</td>
            </tr>
        </table>
    </div>;

};

export default Usuarios;
