import {
  actionTypeSuccess,
  actionTypeReset,
} from './actions';

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypeSuccess:
      const nextStep = ++state.activeStep;

      return {
        ...state,
        activeStep: nextStep,
        score: state.data[state.activeStep - 1]?.score,
        ...(state.activeStep === state.data.length && { isFinish: true }),
      };
    case actionTypeReset:
      return {
        ...state,
        activeStep: 0,
        score: 0,
        isFinish: false,
      };
    default:
      return state;
  }
};

export default reducer;
