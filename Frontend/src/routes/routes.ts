// src/routes/routes.ts
import Home from "../pages/Home";
import Login from "../pages/Login";
import Graph from "../pages/Graph";       // Importar el componente Graph
import UploadPage from "../pages/UploadPage"; // Importar el componente UploadPage
import * as ROUTES from "./../constants/routes";

interface RouteType {
  path: string;
  component: any;
  name: string;
  protected: boolean;
}

const routes: RouteType[] = [
  {
    path: ROUTES.ROOT_PATH,
    component: Login,
    name: "Login Screen",
    protected: false,
  },
  {
    path: ROUTES.LOGIN_PATH,
    component: Login,
    name: "Login Screen",
    protected: false,
  },
  {
    path: ROUTES.HOME_PATH,
    component: Home,
    name: "Home Screen",
    protected: true, // Ruta Protegida
  },
  {
    path: ROUTES.GRAPH_PATH,
    component: Graph,
    name: "Graph Screen",
    protected: true, // Ruta Protegida
  },
  {
    path: ROUTES.UPLOAD_PAGE_PATH,
    component: UploadPage,
    name: "Upload Page",
    protected: true, // Ruta Protegida
  },
  {
    path: "*",
    component: Error,
    name: "Error Screen",
    protected: false,
  }
];

export default routes;


  /*,
  {
    path: ROUTES.MESSAGING_PATH,
    component: FCM,
    name: "Firebase Cloud Messaging",
    protected: true,
  },
  {
    path: ROUTES.PROFILE_PATH,
    component: Profile,
    name: "Login Screen",
    protected: true,
  },
,*/