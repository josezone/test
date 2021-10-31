import React, { Component, SyntheticEvent } from "react";
import {
  SomethingWentWrong,
  SomethingWentWrongConstants,
  StyledSomethingWentWrong,
} from "../../../ui";

export class ErrorBoundry extends Component<any> {
  state = { hasError: false };
  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }
  componentDidCatch(error: any, errorInfo: any) {}

  handleClick = (event: SyntheticEvent) => {
    event.preventDefault();
    this.setState({ hasError: false });
    window.location.href = this.props.publicUrl;
  }

  render() {
    if (this.state.hasError) {
      return (
        <SomethingWentWrong
          SomethingWentWrongStyle={StyledSomethingWentWrong}
          SomethingWentWrongConstants={SomethingWentWrongConstants}
          handleClick={this.handleClick}
        />
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundry;
