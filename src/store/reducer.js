import {
  actionTypeSuccess,
  actionTypeReset,
} from './actions';
import { defaultStore } from './store';

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypeSuccess:
      return {
        ...state,
        activeStep: state.activeStep + 1,
        score: state.data[state.activeStep - 1].score,
        ...(state.activeStep === state.data.length && { isFinish: true }),
      };
    case actionTypeReset:
      return { ...defaultStore };
    default:
      return state;
  }
};

export default reducer;
