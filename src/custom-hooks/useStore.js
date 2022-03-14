import { useContext } from 'react';
import Context from '../context/Context';

const useStore = () => {
  const { store, dispatch } = useContext(Context);

  const { data, activeStep } = store;

  return { store, dispatch, currentStepData: data[activeStep] };
};

export default useStore;
