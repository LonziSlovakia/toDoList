const INIT_STATE = 'Všetky';

const show = (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'REWRITE_SHOW':
      return action.payload.text
    default:
      return state
  }
}

export default show;