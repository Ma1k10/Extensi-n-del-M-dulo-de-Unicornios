import React from 'react';
import { useUnicornContext } from '../context/UnicornContext';

const UnicornsView = () => {
  const { unicorns, deleteUnicorn } = useUnicornContext();

  return (
    <div>
      <h2>Listado de Unicornios</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {unicornios.map((unicorn) => (
            <tr key={unicorn.id}>
              <td>{unicorn.id}</td>
              <td>{unicorn.nombre}</td>
              <td>{unicorn.edad}</td>
              <td>
                <button onClick={() => deleteUnicorn(unicorn.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UnicornsView;
