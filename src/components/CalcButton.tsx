import * as React from "react";
import { Button, Paper, Typography } from "@material-ui/core";

export interface CalcButtonProps {
  onClick: (
    value: any
  ) => (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export interface CalcButtonState {
  input: any;
  // ? How do I include all the symbols
}

class CalcButton extends React.Component<CalcButtonProps, CalcButtonState> {
  render() {
    return (
      <Paper
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#1f2f3f"
        }}
      >
        <Button
          onClick={this.props.onClick(this.props.children)}
          style={{ width: "100%", height: "100%" }}
        >
          <Typography variant="h5" style={{ color: "#eeeeee" }}>
            {this.props.children}
          </Typography>
        </Button>
      </Paper>
    );
  }
}

export default CalcButton;
