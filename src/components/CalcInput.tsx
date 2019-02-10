import * as React from "react";
import { Paper, Typography } from "@material-ui/core";

export interface CalcButtonProps {}

export interface CalcButtonState {}

class CalcButton extends React.Component<CalcButtonProps, CalcButtonState> {
  state = {};
  render() {
    return (
      <Paper style={{ width: "100%", backgroundColor: "#1f2f3f" }}>
        <Typography
          variant="h1"
          style={{ textAlign: "end", paddingRight: 10, color: "#eeeeee" }}
        >
          {this.props.children}
        </Typography>
      </Paper>
    );
  }
}

export default CalcButton;
