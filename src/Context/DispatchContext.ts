import React from "react";
import { Action } from "./types";

export const DispatchContext = React.createContext<React.Dispatch<Action>>(
  () => {},
);