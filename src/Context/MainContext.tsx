import React, { useReducer } from 'react';
import reducer from './reduser';
import { DispatchContext } from './DispatchContext';
import { initialState, StateContext } from './StateContext';

type Props = {
  children: React.ReactNode;
};

if (!JSON.parse(localStorage.getItem('todos') ?? '[]').length) {
  localStorage.setItem('todos', '[]');
}


const MainContext: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export default MainContext;
