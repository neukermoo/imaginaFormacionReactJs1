import CommonButton from "../components/Sesion/CommonButton.component";

export default function FormRegister(props) {
  return (
    <form className="formulario">  
      <div class="header">
        <div className="form-group row">
          <div className="col-sm-9">
            <h4>REGISTRO</h4>
          </div>
          <div className="col-sm-3">
              <CommonButton style="btn btn-outline-dark btn-sm bi bi-arrow-counterclockwise" onClick={props.onClickAtras}></CommonButton>
          </div>
        </div>
      </div>

        <div className="form-group row">
          <label for="email" className="col-sm-2 col-form-label font-weight-bold">Email:</label>
          <div className="col-sm-10">
            <input type="email" className="form-control" placeholder="Introduce el email" name= "email" id="email" onChange={props.onChangeFormulario} />
          </div>
        </div>

        <div className="form-group row">
            <label for="password" className="col-sm-2 col-form-label text-align-left">Contraseña:</label>
          <div className="col-sm-10">
            <input type="password" className="form-control" placeholder="Introduce la contraseña" name= "password" id="password" onChange={props.onChangeFormulario}  /> 
          </div>
        </div>

        <div className="form-group row">
            <CommonButton value="Registrarse" style="btn btn-success btn-lg"  onClick={props.onClickRegistro}></CommonButton>
        </div>

    </form>
  );
}

