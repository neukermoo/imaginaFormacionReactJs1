import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//Usuario
const usuario1 = {
  nombre: 'Jordi',
  apellidos: 'Gutierrez Moll'
}

//Función para mostrar los datos de un usuario
function nombre_completo (usuario){
  return usuario.nombre + ' ' + usuario.apellidos
}

//Construimos un elemento que contiene una llamada a la función
const elemento = (
  <h1> Hola, {nombre_completo(usuario1)}</h1>
  
);

function saludo(usuario) {
  //Si existe un usuario mostramos sus datos
  if(usuario) {
      return (<h1>Hola {nombre_completo(usuario)}</h1>);
  } else {
      return (<h1>Hola desconocido </h1>);
  }
}

//Introducimos el elemento en el elemento de index.html que tiene como id 'root'
ReactDOM.render (elemento, document.getElementById('root'));
ReactDOM.render (saludo(), document.getElementById('root')); // devolvera desconocido


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
