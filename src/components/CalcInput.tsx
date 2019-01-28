import * as React from "react";
import { Paper, Typography } from "@material-ui/core";

export interface CalcButtonProps {}

export interface CalcButtonState {}

class CalcButton extends React.Component<CalcButtonProps, CalcButtonState> {
  state = {};
  render() {
    return (
      <Paper style={{ width: "100%" }}>
        <Typography variant="h1" style={{ textAlign: "end", paddingRight: 16 }}>
          {this.props.children}
        </Typography>
      </Paper>
    );
  }
}

export default CalcButton;
