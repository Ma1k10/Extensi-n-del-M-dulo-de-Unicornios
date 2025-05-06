import React, { useContext } from 'react';
import { UnicornContext } from './context/UnicornContext';

const UnicornsContainer = () => {
  const { unicorns } = useContext(UnicornContext);

  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Edad</th>
          <th>Color</th>
          <th>Poder</th>
        </tr>
      </thead>
      <tbody>
        {unicorns.length > 0 ? (
          unicorns.map((u, index) => (
            <tr key={index}>
              <td>{u.name}</td>
              <td>{u.age}</td>
              <td>{u.color}</td>
              <td>{u.power}</td>
            </tr>
          ))
        ) : (
          <tr><td colSpan="4">No hay unicornios aún</td></tr>
        )}
      </tbody>
    </table>
  );
};

export default UnicornsContainer;
