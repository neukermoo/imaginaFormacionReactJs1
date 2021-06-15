import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login, guardarUsuario } from "../../redux/actions/sesion";
import FormLogin from "../../views/FormLogin.view";
import FormRegister from "../../views/FormRegister.view";
import "./Login.component.scss";

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formLogin, setFormlogin] = useState(true);

  let history = useHistory();

  let setFormulario = (event) => {
    var name = event.target.name;
    var value = event.target.value;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const iniciarSesion = (event) => {
    event.preventDefault();

    var jsonUser = JSON.parse(localStorage.getItem(email));

    if (jsonUser != null && jsonUser.password == password) {
      loginSuccess(jsonUser);
    } else {
      alert("Datos de acceso incorrecto");
    }
  };

  let irRegistro = (event) => {
    event.preventDefault();
    setFormlogin(false);
    setEmail("");
    setPassword("");
    history.push("/");
  };
  let volverLogin = (event) => {
    event.preventDefault();
    setFormlogin(true);
    history.push("/");
  };

  let registrarUsuario = (event) => {
    event.preventDefault();

    if (!validarEmail(email)) {
      alert("Email con formato no válido");
      return;
    }

    if (password.length < 5) {
      alert("La contraseña debe de tener un mínimo de 5 caracteres");
      return;
    }

    var result = JSON.parse(localStorage.getItem(email));

    if (result == null) {
      var jsonUser = { email: email, password: password };
      localStorage.setItem(email, JSON.stringify(jsonUser));
      loginSuccess(jsonUser);
    } else {
      alert("El usuario introducido ya existe");
      return;
    }
  };

  function loginSuccess(json) {
    dispatch(login());
    dispatch(guardarUsuario(json));
    history.push("/store");
  }

  function validarEmail(email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email);
  }

  if (formLogin) {
    return (
      <div className='divFormularioLogin row justify-content-center align-items-center'>
        <FormLogin
          onChangeFormulario={setFormulario}
          onClickLogin={iniciarSesion}
          onClickRegistrarse={irRegistro}
        ></FormLogin>
      </div>
    );
  } else {
    return (
      <div className='divFormularioRegistro row justify-content-center align-items-center'>
          <FormRegister
            onChangeFormulario={setFormulario}

            onClickRegistro={registrarUsuario}
            onClickAtras={volverLogin}
          ></FormRegister>
      </div>
    );
  }
}
