import React from 'react';
import { DispatchContext } from './DispatchContext';
import { StateContext } from './StateContext';

export const useGlobalState = () => React.useContext(StateContext);
export const useDispatch = () => React.useContext(DispatchContext);
