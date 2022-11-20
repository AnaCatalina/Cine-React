import React from 'react';
import '.../styles/Pelis.css';

function Pelis(props) {
  return (
    <div className='contenedor-pelis'>
      <img 
        className='imagen-pelis'
        src={require(`.../img/peli-${props.imagen}.jpg`)}
        alt='Foto de Peli'/>
      <div className='contenedor-texto-pelis'>
        <a className='nombre-pelis' href={props.link}>{props.nombre}</a>
        <p className='descripcion-pelis'>"{props.descripcion}"</p>
      </div>
    </div>
  );
}
export default Pelis;