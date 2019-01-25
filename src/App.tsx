import * as React from "react";
import CalcButton from "./components/CalcButton";

import { Grid, Paper } from "@material-ui/core";

export interface AppProps {}

export interface AppState {}

class App extends React.Component<AppProps, AppState> {
  state = {};
  render() {
    return (
      <Grid container justify="center" alignItems="center">
        <Paper style={{ padding: 16 }}>
          <Grid container justify="center" alignItems="center">
            <Grid container spacing={16}>
              <Grid item>
                <CalcButton>Clear</CalcButton>
              </Grid>
            </Grid>
          </Grid>

          <Grid container justify="center" alignItems="center" spacing={16}>
            <Grid item>
              <CalcButton>7</CalcButton>
            </Grid>
            <Grid item>
              <CalcButton>8</CalcButton>
            </Grid>
            <Grid item>
              <CalcButton>9</CalcButton>
            </Grid>
            <Grid item>
              <CalcButton>-</CalcButton>
            </Grid>
          </Grid>

          <Grid container justify="center" alignItems="center" spacing={16}>
            <Grid item>
              <CalcButton>4</CalcButton>
            </Grid>
            <Grid item>
              <CalcButton>5</CalcButton>
            </Grid>
            <Grid item>
              <CalcButton>6</CalcButton>
            </Grid>
            <Grid item>
              <CalcButton>+</CalcButton>
            </Grid>
          </Grid>

          <Grid container justify="center" alignItems="center" spacing={16}>
            <Grid item>
              <CalcButton>1</CalcButton>
            </Grid>
            <Grid item>
              <CalcButton>2</CalcButton>
            </Grid>
            <Grid item>
              <CalcButton>3</CalcButton>
            </Grid>
            <Grid item>
              <CalcButton>=</CalcButton>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    );
  }
}

export default App;
