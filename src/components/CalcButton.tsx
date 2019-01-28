import * as React from "react";
import { Button, Paper, Typography } from "@material-ui/core";

export interface CalcButtonProps {
  onClick?: any;
}

export interface CalcButtonState {}

class CalcButton extends React.Component<CalcButtonProps, CalcButtonState> {
  state = {};
  render() {
    return (
      <Paper style={{ width: "100%", height: "100%" }}>
        <Button
          onClick={this.props.onClick}
          style={{ width: "100%", height: "100%" }}
        >
          <Typography variant="h5">{this.props.children}</Typography>
        </Button>
      </Paper>
    );
  }
}

export default CalcButton;
