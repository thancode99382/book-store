import config from "../config";
// import Body from "../Pages/Body/Body";
import homePage from "../Pages/homePage/homePage";
import Cart from "../Pages/Cart/Cart";
import LearnMore from "../Pages/LearnMore/LearnMore.jsx";
import Register from "../components/Form/Register.jsx";
import Login from "../components/Form/Login.jsx";
import UserInformation from "../components/User/UserInformation.jsx";

export const publicRoutes = [
  {path: config.routes.homePage, component: homePage},
  {path: config.routes.cart, component: Cart},
  {path: `${config.routes.learnmore}/:id`, component: LearnMore},
  {path: config.routes.register, component: Register},
  {path: config.routes.login, component: Login},
  {path: config.routes.userInformation, component: UserInformation},
];
