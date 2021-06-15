import CommonButton from "../components/Sesion/CommonButton.component";

export default function FormLogin(props) {
  return (
      <form className="formulario">
        <div class="header">
          <h4>INICIO SESIÓN</h4>
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

        <div class="form-group row">
            <CommonButton value="Inicia sesión"  style="btn btn-success btn-lg"  onClick={props.onClickLogin}></CommonButton>
              
        </div>
        <div class="form-group row">
            <CommonButton value="Regístrate"  style="btn btn-success btn-lg" onClick={props.onClickRegistrarse}></CommonButton>
        </div>
      </form>
  );
}

