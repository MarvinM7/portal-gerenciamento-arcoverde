const INITIAL_STATE = null;

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOGIN':
      let { id, nome, email, imagem, token } = action.usuario_info
      return { id, nome, email, imagem, token };
    case 'LOGOUT':
      return null;
    default:
      return state;
  }
}

export default user;