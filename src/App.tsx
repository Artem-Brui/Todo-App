import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Title from "./components/Title";
import ErrorBoundary from "./components/ErrorBoundary";

// localStorage.clear()

export const App: React.FC = () => {
  return (
    <div className="todoapp" role="application">
      <ErrorBoundary>
        <Title />
        <div className="todoapp__content">
          <Header />
          <TodoList />
          <Footer />
        </div>
      </ErrorBoundary>
    </div>
  );
};
