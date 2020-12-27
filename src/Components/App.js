import React, { Component, Fragment } from "react";
import "../styles.css";
import Exercises from "./Exercises";
import { Header, Footer } from "./Layouts/index";

export default class extends Component {
  render() {
    return (
      <Fragment>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Header />
        <Exercises />
        <Footer />
      </Fragment>
    );
  }
}
