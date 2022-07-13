import React, { Component } from "react";
type CounterProps = {
  count: number;
};
type StateProps = {
  message: string;
};
export class Counter extends Component<StateProps, CounterProps> {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };
  render() {
    return (
      <div>
        Counter {this.state.count} - {this.props.message}
        <button type="button" onClick={this.handleClick}>
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;
