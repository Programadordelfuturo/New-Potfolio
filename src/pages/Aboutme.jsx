import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { upLoadingThunk } from '../store/slices/isLoading.slice';

const Aboutme = () => {

  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(upLoadingThunk()) 
  },[])

  return (
    <div className='aboutme'>
      <div>
        <strong>Acerca de mi</strong>
        <p>
          Tienen al frente a una persona dedicada, responsable, perseverante, comunicativa, decidida, proactiva, 
          perfectible en todos los ambitos, ambiciosa y financieramente responsable. Me gustan los viajes de fin de semana,
          la comida marina e investigar el entorno en el que me encuentro, gustoso de conseguir un trabajo remoto en el 
          que pueda desempeñarme desde cualquier lugar.
          <br/>
          Dominio los siguientes lenguajes de programación, Bases de datos, fraemwork y Librerias:
          <br/>
          - HTML
          - CSS
          - JavaScript
          - TypeScript
          - Python
          - React
          - Node
          - Prostgres
          - MongoDB
        </p>
      </div>
    </div>
  );
};

export default Aboutme;