import React, { Component } from 'react';
import ReactDOM from "react-dom";

export default class LambdaEmailSubscriber extends Component {
  //props will have the lambda endpoint inside it
  constructor(props){
    super(props);
    state = {
      endpoint: props.lambda
    };
  }
  //Create form which will validate that it is an email address
    //create a sumbit which does a post request to the lambda
  render(){
    <div>
      <form>
        <input type="text" placeholder="Email" />
      </form>
    </div>
  }
}
