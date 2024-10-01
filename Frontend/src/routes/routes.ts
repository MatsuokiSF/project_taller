// src/routes/routes.ts
import Home from "../pages/Home";
import Login from "../pages/Login";
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
    protected: true,
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
  {
    path: ROUTES.TODO_DETAILS_PATH,
    component: TodoDetails,
    name: "Todo Details Screen",
    protected: true,
  },
  {
    path: "*",
    component: Error,
    name: "Error Screen",
    protected: false,
  },*/