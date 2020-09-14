const INITIAL_STATE = {
  height: '',
};

const navReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SAVE_NAV_HEIGHT_VALUE':
      return {
        ...state,
        height: action.payload,
      };

    default:
      return state;
  }
};

export default navReducer;
