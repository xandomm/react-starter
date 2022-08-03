import React from 'react';


export default class MiddleBottom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      counter:0,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      counter: this.state.counter + 1,
    })
  }
render() {
  return(
    <>
    <h1> {this.state.counter} </h1>
    <h1>{this.props.text}</h1>
    <button onClick={this.handleClick}>Click Me</button>
    
    </>
  )
}
  

}