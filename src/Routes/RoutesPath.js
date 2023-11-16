import Home from "../Containers/Top/index";
import Ask from "../Containers/Ask";
import Newest from "../Containers/Newest";

export const routes = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/ask",
    component: <Ask />,
  },
  {
    path: "/newest",
    component: <Newest />,
  },
];
