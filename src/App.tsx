import * as React from "react";
import CalcButton from "./components/CalcButton";
import CalcInput from "./components/CalcInput";

import { Grid, Paper } from "@material-ui/core";

export interface AppProps {}

export interface AppState {}

class App extends React.Component<AppProps, AppState> {
  state = {};
  handleClick = () => {
    console.log("ha");
  };
  render() {
    return (
      <Grid container justify="center">
        <Paper style={{ padding: 16, margin: 16 }}>
          <Grid container spacing={16}>
            <Grid item xs>
              <CalcInput>0</CalcInput>
            </Grid>
          </Grid>

          <Grid container spacing={16}>
            <Grid item xs>
              <CalcButton>c</CalcButton>
            </Grid>
            <Grid item xs>
              <CalcButton>+/-</CalcButton>
            </Grid>
            <Grid item xs>
              <CalcButton>%</CalcButton>
            </Grid>
            <Grid item xs>
              <CalcButton>/</CalcButton>
            </Grid>
          </Grid>

          <Grid container spacing={16}>
            <Grid item xs>
              <CalcButton onClick={this.handleClick}>7</CalcButton>
            </Grid>
            <Grid item xs>
              <CalcButton>8</CalcButton>
            </Grid>
            <Grid item xs>
              <CalcButton>9</CalcButton>
            </Grid>
            <Grid item xs>
              <CalcButton>x</CalcButton>
            </Grid>
          </Grid>

          <Grid container spacing={16}>
            <Grid item xs>
              <CalcButton>4</CalcButton>
            </Grid>
            <Grid item xs>
              <CalcButton>5</CalcButton>
            </Grid>
            <Grid item xs>
              <CalcButton>6</CalcButton>
            </Grid>
            <Grid item xs>
              <CalcButton>-</CalcButton>
            </Grid>
          </Grid>

          <Grid container spacing={16}>
            <Grid item xs>
              <CalcButton>1</CalcButton>
            </Grid>
            <Grid item xs>
              <CalcButton>2</CalcButton>
            </Grid>
            <Grid item xs>
              <CalcButton>3</CalcButton>
            </Grid>
            <Grid item xs>
              <CalcButton>+</CalcButton>
            </Grid>
          </Grid>

          <Grid container spacing={16}>
            <Grid item xs={6}>
              <CalcButton>0</CalcButton>
            </Grid>
            <Grid item xs>
              <CalcButton>.</CalcButton>
            </Grid>
            <Grid item xs>
              <CalcButton>=</CalcButton>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    );
  }
}

export default App;
