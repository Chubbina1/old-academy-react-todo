import React from "react";

 class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }
  handleOnClick = () => {
    // this.setState({
    //   value: this.state.value + 1,
    // })

    this.setState((prevState) =>({
      value: prevState.value + 1,
    }))
  
    
  };
  
  handleDecrease = () => {
    this.settate((prevState) =>({
      value:prevState.value - 1,
    }))
  };
  
  render() {
    return (
      <div>
        <button onClick={this.handleOnClick}>Increase value</button>
        <button onClick={this.handleDecrease}>Decrease value</button>
        <p>Message:{this.state.value}</p>
      </div>
    );
  }
}
export default Counter;