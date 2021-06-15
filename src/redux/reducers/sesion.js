import { ACTIONS_LOGIN} from '../actions/sesion';
	
const initialState= false;
const initialStateguardarUsuario = "";

export const sesion = (state = initialState, action) => {
    switch(action.type) {
      case ACTIONS_LOGIN.LOGIN:
        state= !state;
        return state;

      default:
        return state;
    }
  }

  export const guardarUsuario = (state = initialStateguardarUsuario, action) => {
    switch(action.type) {
      case ACTIONS_LOGIN.SAVE:
        return action.payload;

      default:
        return state;
    }
  }
  
  export default {sesion, guardarUsuario};