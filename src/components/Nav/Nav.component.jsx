import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon,faSun, faUser } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import "./Nav.component.scss";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../redux/actions/sesion";

export default function Nav() {

  const sesion = useSelector((state) => state.sesion);
  const dispatch = useDispatch();

  const [modoNoche, setNoche] = useState(false);

  let history = useHistory();

  let cambiarModo = () => {
    setNoche(!modoNoche);
    let bgcolor = !modoNoche ? "#282c34" : "grey";
    let btnColor = !modoNoche ? "btn btn-outline-dark" : "btn btn-outline-light";

    document.body.style = "background:" + bgcolor;
  };

  let divIcono = modoNoche ? (
    <div>
      <FontAwesomeIcon icon={faMoon} />
    </div>
  ) : (
    <div>
      <FontAwesomeIcon icon={faSun} />
    </div>
  );

  const sesionButton = (event) => {
    dispatch(login());
    history.push("/");
  };
  return (
      <div >
      <div className="Nav"
      style={{ backgroundColor: modoNoche ? "#282c34" : "grey" }}
      >

        <Link className="Nav-link" to="/store">
          <button className={!modoNoche ? "btn btn-outline-dark Nav-link" : "btn btn-outline-light Nav-link"}>Store </button>
        </Link>
        <Link className="Nav-link" to="/about">
          <button className={!modoNoche ? "btn btn-outline-dark Nav-link" : "btn btn-outline-light Nav-link"}>About </button>
        </Link>
        <button className={!modoNoche ? "btn btn-outline-dark Nav-link" : "btn btn-outline-light Nav-link"} onClick={sesionButton}>
          <FontAwesomeIcon icon={faUser}/>
        </button>
      
        <button className={!modoNoche ? "btn btn-outline-dark Nav-link" : "btn btn-outline-light Nav-link"} onClick={cambiarModo}>
          {divIcono}
        </button>
      </div>
    </div>
  );
}
