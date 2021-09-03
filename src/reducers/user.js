const INITIAL_STATE = null;

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOGIN':
      let { id, name, email, imagem, token } = action.obj
      return { id, name, email, imagem, token };
    case 'LOGOUT':
      return null;
    default:
      return state;
  }
}

export default user;