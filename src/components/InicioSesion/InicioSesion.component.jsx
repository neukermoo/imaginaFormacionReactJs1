import './InicioSesion.component.scss';

//no creamos estado pues lo gestiona el controlador, Mensaje
export default function InicioSesion(props) {
  return (
    <div>    
        
      <p>{(props.sesion ? 'Bienvenido' : 'Inicia sesion para empezar')}</p>
      <button onClick={props.login} className="Inicio">Iniciar Sesion</button>
      <button onClick={props.logout} className="Cierro">Cerrar sesion</button>  
    </div> 

  );
}