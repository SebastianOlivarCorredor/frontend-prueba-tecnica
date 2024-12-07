import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './styles.css';

function Formulario() {
  const [elementos, setElementos] = useState([]);
  const [nombre, setNombre] = useState('');
  const [busqueda, setBusqueda] = useState(''); // Nuevo estado para la búsqueda
  const [elementoEncontrado, setElementoEncontrado] = useState(null); // Nuevo estado para el elemento encontrado

  const agregarElemento = async () => {
    try {
      const response = await axios.post('http://localhost:3001/elementos', { nombre: nombre });
      const nuevoElemento = response.data;
      setElementos([...elementos, nuevoElemento]);
      setNombre('');
    } catch (error) {
      console.error('Error al agregar elemento:', error);
      // Manejar el error, por ejemplo, mostrando un mensaje al usuario
    }
  };

  const listarElementos = () => {
    return elementos.map((elemento, index) => (
      <li key={index}>
        {elemento.nombre}
        <button onClick={() => editarElemento(index)}>Editar</button>
        <button onClick={() => eliminarElemento(index)}>Eliminar</button>
      </li>
    ));
  };

  const editarElemento = async (index) => {
    const nuevoNombre = prompt("Nuevo nombre:", elementos[index].nombre);
    if (nuevoNombre) {
      try {
        await axios.put(`http://localhost:3001/elementos/${elementos[index].nombre}`, { nombre: nuevoNombre });
        const nuevosElementos = [...elementos];
        nuevosElementos[index].nombre = nuevoNombre;
        setElementos(nuevosElementos);
      } catch (error) {
        console.error('Error al editar elemento:', error);
        // Manejar el error, por ejemplo, mostrando un mensaje al usuario
      }
    }
  };

  const eliminarElemento = async (index) => {
    try {
      await axios.delete(`http://localhost:3001/elementos/${elementos[index].nombre}`);
      const nuevosElementos = elementos.filter((_, i) => i !== index);
      setElementos(nuevosElementos);
    } catch (error) {
      console.error('Error al eliminar elemento:', error);
      // Manejar el error, por ejemplo, mostrando un mensaje al usuario
    }
  };
  useEffect(() => {
    const obtenerElementos = async () => {
      try {
        const response = await axios.get('http://localhost:3001/elementos');
        setElementos(response.data);
      } catch (error) {
        console.error('Error al obtener elementos:', error);
        // Manejar el error, por ejemplo, mostrando un mensaje al usuario
      }
    };
    obtenerElementos();
  }, []); // El array vacío como segundo argumento asegura que esto se ejecute solo una vez al montar el componente

  const buscarElemento = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/elementos/${busqueda}`);
      setElementoEncontrado(response.data);
    } catch (error) {
      console.error('Error al buscar elemento:', error);
      // Manejar el error, por ejemplo, mostrando un mensaje al usuario
      setElementoEncontrado(null); // Limpiar el estado si hay un error
    }
  };
  return (
    <div className="container"> 
      <div className="row justify-content-center"> 
        <div className="col-md-6"> 
          <h1 className="text-center mb-4">Prueba técnica Desarrollador Fullstack Sebastian Olivar</h1>
  
          <div className="input-group mb-3"> 
            <input 
              type="text" 
              className="form-control" 
              placeholder="Nombre del elemento" 
              value={nombre} 
              onChange={(e) => setNombre(e.target.value)} 
            />
            <Button variant="primary" onClick={agregarElemento}>Agregar</Button>
          </div>
  
          <div className="input-group mb-3">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Buscar elemento por nombre" 
              value={busqueda} 
              onChange={(e) => setBusqueda(e.target.value)} 
            />
            <Button variant="secondary" onClick={buscarElemento}>Buscar</Button>
          </div>
  
          <h2 className="text-center mb-4">Elementos</h2>
  
          <table className="table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {elementos.map((elemento, index) => (
                <tr key={index}>
                  <td>{elemento.nombre}</td>
                  <td>
                    <Button variant="secondary" size="sm" onClick={() => editarElemento(index)}>Editar</Button>{' '}
                    <Button variant="danger" size="sm" onClick={() => eliminarElemento(index)}>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
  
          {elementoEncontrado && (
            <div className="mt-4">
              <h3>Elemento encontrado:</h3>
              <p>Nombre: {elementoEncontrado.nombre}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Formulario;
