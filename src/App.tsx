import React, { Component } from "react";
import { Typography } from "@material-ui/core";

export interface AppProps {}

export interface AppState {}

class App extends React.Component<AppProps, AppState> {
  state = {};
  render() {
    return (
      <div>
        <Typography>Hey</Typography>
      </div>
    );
  }
}

export default App;
