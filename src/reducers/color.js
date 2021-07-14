const INIT_STATE = 'purple';

const color = (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'REWRITE_COLOR':
      return action.payload.text
      default:
      return state
  }
}

export default color;