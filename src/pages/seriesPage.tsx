import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "redux/store";
import HooksCakeContainer from "reduxComponents/hooksCakeContainer";
import HooksIceCreamContainer from "reduxComponents/hooksIceCreamContainer";
import HooksJellyContainer from "reduxComponents/hooksJellyContainer";
import "./pages.scss";
class SeriesPage extends React.Component {
  render(): React.ReactNode {
    return (
      <Provider store={store}>
        <HooksJellyContainer />
        <HooksCakeContainer />
        <HooksIceCreamContainer />
      </Provider>
    );
  }
}
export default SeriesPage;
