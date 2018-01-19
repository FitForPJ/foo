import React, { Component } from 'react';


class Content extends Component{
  render(){
    return(
      <div>
          <h2>t-content</h2>
          <p>{this.props.Subject}</p>
          <p>{this.props.name}</p>
          <p>{this.props.how}</p>
      </div>
    );
  }
}
export default Content;
