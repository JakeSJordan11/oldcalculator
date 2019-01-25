import * as React from "react";
import { Button, Paper, Typography } from "@material-ui/core";

export interface CalcButtonProps {}

export interface CalcButtonState {}

class CalcButton extends React.Component<CalcButtonProps, CalcButtonState> {
  state = {};
  render() {
    return (
      <Button>
        <Paper style={{ height: "20vh", width: "25vh" }}>
          <Typography style={{ paddingTop: "25%" }} align="center" variant="h2">
            {this.props.children}
          </Typography>
        </Paper>
      </Button>
    );
  }
}

export default CalcButton;
