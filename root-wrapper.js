import React from "react";
import { createGlobalStyle } from "styled-components";
import { Provider } from "react-redux";
import store from "./src/redux/store";

const GlobalStyles = createGlobalStyle`
body {
    margin: 0;
    padding:0;
    background: black;
    color:white;
}`;

export const wrapRootElement = ({ element }) => {
  return (
    <>
      <GlobalStyles />
      <Provider store={store}>{element}</Provider>
    </>
  );
};
