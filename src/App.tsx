import LoginPage from "pages/login";
import React from "react";
import { Provider } from "react-redux";
import HooksIceCreamContainer from "reduxComponents/hooksIceCreamContainer";
import store from "redux/store";
import HooksJellyContainer from "reduxComponents/hooksJellyContainer";
import HooksCakeContainer from "reduxComponents/hooksCakeContainer";
import "bootstrap/dist/css/bootstrap.min.css";

const App: React.FC = () => {
  return <LoginPage />;
};

export default App;
