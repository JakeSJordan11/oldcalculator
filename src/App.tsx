import * as React from "react";
import CalcButton from "./components/CalcButton";
import CalcInput from "./components/CalcInput";

import { Grid, Paper } from "@material-ui/core";

export interface AppProps {}

export interface AppState {
  input: any;
}

class App extends React.Component<AppProps, AppState> {
  state = {
    input: 0
  };

  handleClick = (value: any) => (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    console.log("value", value);
    this.setState({ input: value });
  };

  render() {
    return (
      <Grid container justify="center">
        <Paper style={{ padding: 16, margin: 16, backgroundColor: "#005f5f" }}>
          <Grid container spacing={16}>
            <Grid item xs>
              <CalcInput>{this.state.input}</CalcInput>
            </Grid>
          </Grid>

          <Grid container spacing={16}>
            <Grid item xs>
              <CalcButton onClick={this.handleClick}>c</CalcButton>
            </Grid>
            <Grid item xs>
              <CalcButton onClick={this.handleClick}>+/-</CalcButton>
            </Grid>
            <Grid item xs>
              <CalcButton onClick={this.handleClick}>%</CalcButton>
            </Grid>
            <Grid item xs>
              <CalcButton onClick={this.handleClick}>/</CalcButton>
            </Grid>
          </Grid>

          <Grid container spacing={16}>
            <Grid item xs>
              <CalcButton onClick={this.handleClick}>7</CalcButton>
            </Grid>
            <Grid item xs>
              <CalcButton onClick={this.handleClick}>8</CalcButton>
            </Grid>
            <Grid item xs>
              <CalcButton onClick={this.handleClick}>9</CalcButton>
            </Grid>
            <Grid item xs>
              <CalcButton onClick={this.handleClick}>x</CalcButton>
            </Grid>
          </Grid>

          <Grid container spacing={16}>
            <Grid item xs>
              <CalcButton onClick={this.handleClick}>4</CalcButton>
            </Grid>
            <Grid item xs>
              <CalcButton onClick={this.handleClick}>5</CalcButton>
            </Grid>
            <Grid item xs>
              <CalcButton onClick={this.handleClick}>6</CalcButton>
            </Grid>
            <Grid item xs>
              <CalcButton onClick={this.handleClick}>-</CalcButton>
            </Grid>
          </Grid>

          <Grid container spacing={16}>
            <Grid item xs>
              <CalcButton onClick={this.handleClick}>1</CalcButton>
            </Grid>
            <Grid item xs>
              <CalcButton onClick={this.handleClick}>2</CalcButton>
            </Grid>
            <Grid item xs>
              <CalcButton onClick={this.handleClick}>3</CalcButton>
            </Grid>
            <Grid item xs>
              <CalcButton onClick={this.handleClick}>+</CalcButton>
            </Grid>
          </Grid>

          <Grid container spacing={16}>
            <Grid item xs={6}>
              <CalcButton onClick={this.handleClick}>0</CalcButton>
            </Grid>
            <Grid item xs>
              <CalcButton onClick={this.handleClick}>.</CalcButton>
            </Grid>
            <Grid item xs>
              <CalcButton onClick={this.handleClick}>=</CalcButton>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    );
  }
}

export default App;
