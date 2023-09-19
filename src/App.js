import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { routes } from "./Routes/RoutesPath";

function App() {
  return (
    <div>
      <Routes>
        {routes.map((item, key) => (
          <Route key={key} path={item.path} element={item.component} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
