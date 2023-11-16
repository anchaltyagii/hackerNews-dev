import Home from "../Containers/Top/index";
import Ask from "../Containers/Ask";
import Newest from "../Containers/Newest";
import Show from "../Containers/Show";

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
  {
    path: "/show",
    component: <Show />,
  },
];
