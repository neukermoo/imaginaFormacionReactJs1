export const ACTIONS_LOGIN = {
  LOGIN: "LOGIN_SESION",
  SAVE: "SAVE_SESION",
};

export const login = () => {
  return {
    type: ACTIONS_LOGIN.LOGIN,
  };
};

export const guardarUsuario = (msg) => {
  return {
    type: ACTIONS_LOGIN.SAVE,
    payload: msg,
  };
};
