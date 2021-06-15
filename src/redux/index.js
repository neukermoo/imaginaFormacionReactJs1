/* Fichero redux/index.js */
import { listado } from './reducers/productos.reducers';
import { sesion } from "./reducers/sesion";

import { createStore, combineReducers} from "redux";

// Crearemos un saga

const reducers = combineReducers({
  sesion,
  listado
});

// STORE - El estado global de la aplicación.

let store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Ejecutamos el hilo de ejecución del middleware,
// sólo funcionará una vez ejecutado el método applyMiddleware
// sagaMiddleware.run(rootSaga);

export default store;
