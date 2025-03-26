import React from "react";
import { GlobalState } from "./types";

export const initialState: GlobalState = {
  todos: JSON.parse(localStorage.getItem('todos') ?? '[]'),
  mainInputHTMLElement: null,
  filterType: 'All',
};

export const StateContext = React.createContext<GlobalState>(initialState);