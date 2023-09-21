import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { routes } from "./Routes/RoutesPath";
import Header from "./Components/Header/Header";

// https://news.ycombinator.com/favorites?id=ancl&comments=t

function App() {
  return (
    <>
      <Header />
      <Routes>
        {routes.map((item, key) => (
          <Route key={key} path={item.path} element={item.component} />
        ))}
      </Routes>
    </>
  );
}

export default App;
