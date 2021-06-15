import { Link } from 'react-router-dom';
import './elementoProducto.component.scss';

export default function elementoProducto(props) {

    let obtenerInformacion = (obj) => {

        return {
          pathname: '/Product/' + obj.id,
          state: { 
            id: obj.id,
            titulo: obj.titulo,
            descripcion: obj.descripcion,
            precio: obj.precio,
            imagen: obj.imagen,
            categoria: obj.categoria
          }
        }  
      }

    return (
      
            <div key={props.id} className="card divProducto">
                <div className="card-header">
                  <div class="row">
                    <div class="col-sm-8" id="a">
                      <p className="card-text text-uppercase font-weight-bold">{props.titulo}</p>
                    </div>
                    <div class="col-sm-4" id="b">
                      <p className="card-text">{props.categoria}</p>
                    </div>
                  </div>
                </div>
                <div className="img-card row justify-content-center align-items-center divImagenProducto">
                    <div class="col-sm-8" id="a">
                    <Link to={obtenerInformacion(props)}>
                      <img src={props.imagen} className="imagenProducto"></img>
                  </Link>   
                    </div>
                    <div class="col-sm-4" id="b">
                      <p className="card-text text-truncate">{props.descripcion}</p>
                    </div>
                  
                </div>
            </div>
    );
}