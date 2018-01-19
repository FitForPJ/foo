import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Conten from './Content';


class App extends Component {
  constructor(){
    super();
    this.state = {
      data:[],
      message: "UnLike",
      type:""
    };
    this.changeMsg = this.changeMsg.bind(this);
    this.insertData = this.insertData.bind(this);
  }
  insertData(){
    var item =  "React";
    var myArray = this.state.data;
    myArray.push(item);
    this.setState({data:myArray});
  }
  OnChange(event){
    this.setState({type:event.target.value})
  }

  changeMsg(){
    this.setState({ message : "Like"})
  }
  render() {
    const{ name,time
    } = this.props
    var mystyle = {
      fontsize:200,
      color: '#FF0000',
      textAlign: 'center'
    }
    return (
      <div >
        <h1 style = {mystyle}>Early writing by ko 5635512069</h1>
        <ul>
          <li>{name}</li>
          <li><time datetime = {time.toISOString()}>{time.toLocaleDateString()}</time></li>
        </ul>
        <Header/>
        <Conten Subject = 'React-Content' name = 'pattha' how = 'play' />
        <Footer/>
        <button onClick = {this.changeMsg}>{this.state.message}</button><br/>
        <h1>{this.state.data}</h1>
        <button onClick = {this.insertData}>Insert</button><br/><br/>
        <input type = "text" onChange= {this.OnChange.bind(this)}/>
        <h1>Hello {this.state.type}</h1>
      </div>
    );
  }
}





export default App;
