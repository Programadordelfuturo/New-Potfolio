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
        <strong>Acerca de mí</strong>
        <p>
          Feliz de desarrollarme como programador día a día, continuamente realizo proyectos,
          pero a la par tengo Hobbies y deseos que estan prontos a acerce realidad, soy amante
          del deporte, me gusta mucho jugar futbol, la natación, y manejar bicicleta, busco
          tambien aprender artes de defensa propia y volver a hacer calistenia.
          Salidas en familia y reuniones con amigos las prefiero pocas veces al mes, pero cada
          vez que pasa las disfruto y soy fanatico de la comida marina
        </p>
      </div>
    </div>
  );
};

export default Aboutme;