import './Product.page.scss';
 
export default function Product(props) {

    let { categoria,titulo, imagen, descripcion, precio, id } = props.history.location.state;
    
    return (
      <div key={id} className="card divCardProducto">
        <div className="card-header">
          <div class="row">
            <div class="col-sm-12" id="a">
              <p className="card-text text-uppercase font-weight-bold">{titulo}</p>
            </div>         
          </div>
        </div>
        <div className="img-card row justify-content-center align-items-center">
            <div class="col-sm-6" >
              <img src={imagen} width="25%"></img>
            </div>
        </div>
        <div className="card-body row ">
            <div class="col-sm-6" >
              <p className="card-text textoProducto">{descripcion}</p>
            </div>
            <div class="col-sm-6" >
              <p className="card-text precioProducto"> Only {precio} $</p>
            </div>
        </div>
        <div className="card-footer">
            <p className="card-text footerProducto">This product belongs to the category of <b>{categoria}</b></p>
        </div>
  </div>
    );
}