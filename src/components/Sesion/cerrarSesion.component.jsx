import './cerrarSesion.component.scss';

import { Link } from 'react-router-dom';
import LinkPropio from '../Propios/LinkPropio.component';

export default function cerrarSesion() {
  return (
    <div className="Nav">
      <LinkPropio href='/' className="Nav-link">
        Cerrar sesion
      </LinkPropio>
    </div>
  );
}