import React, { Component } from 'react';

class Header extends Component{
  constructor(){
    super();
    this.state = {
      display:['none','none','none','none','none','none','none','none','none'],
      name:"UnLike",
      count:0
    };
    this.changeMsg = this.changeMsg.bind(this);
    this.changeMsg1 = this.changeMsg1.bind(this);
    this.changeMsg2 = this.changeMsg2.bind(this);
    this.changeMsg3 = this.changeMsg3.bind(this);
    this.changeMsg4 = this.changeMsg4.bind(this);
    this.changeMsg5 = this.changeMsg5.bind(this);
    this.changeMsg6 = this.changeMsg6.bind(this);
    this.changeMsg7 = this.changeMsg7.bind(this);

  }
  changeMsg(){
   var items = this.state.display;
    items[0] = "block";
    this.setState({display:items})
  }
  changeMsg1(){
   var items = this.state.display;
    items[1] = "block";
    this.setState({display:items})
  }
  changeMsg2(){
   var items = this.state.display;
    items[2] = "block";
    this.setState({display:items})
  }
  changeMsg3(){
   var items = this.state.display;
    items[3] = "block";
    this.setState({display:items})
  }
  changeMsg4(){
   var items = this.state.display;
    items[4] = "block";
    this.setState({display:items})
  }
  changeMsg5(){
   var items = this.state.display;
    items[5] = "block";
    this.setState({display:items})
  }
  changeMsg6(){
   var items = this.state.display;
    items[6] = "block";
    this.setState({display:items})
  }
  changeMsg7(){
   var items = this.state.display;
    items[7] = "block";
    this.setState({display:items})
  }

  render(){
     var mystyle = {
      display : 'inline'
    }
    var mystyle1 = {
      display : this.state.display[0]
    }
    var mystyle2 = {
      display : this.state.display[1]
    }
    var mystyle3 = {
      display : this.state.display[2]
    }
    var mystyle4 = {
      display : this.state.display[3]
    }
    var mystyle5 = {
      display : this.state.display[4]
    }
    var mystyle6 = {
      display : this.state.display[5]
    }
    var mystyle7 = {
      display : this.state.display[6]
    }
    var mystyle8 = {
      display : this.state.display[7]
    }

      return(
      <div>

          <h2>Github</h2>
          <div>
          <h2 style = {mystyle}>echo "msg" >> README.md </h2>
          <button  style = {mystyle} onClick = {this.changeMsg} >Show</button>
          <h1 style = {mystyle1}>it make README.md file and it have msg text in file</h1>
          </div>

          <div>
          <h2 style = {mystyle}>git init </h2>
          <button  style = {mystyle} onClick = {this.changeMsg1}>Show</button>
          <h1 style = {mystyle2}>it make git file </h1>
          </div>

          <div>
          <h2 style = {mystyle} >git add README.md </h2>
          <button  style = {mystyle} onClick = {this.changeMsg2}>Show</button>
          <h1 style = {mystyle3}>it add README.md to git in local computer</h1>
          </div>

          <div>
          <h2 style = {mystyle}>git status </h2>
          <button  style = {mystyle} onClick = {this.changeMsg3}>Show</button>
          <h1 style = {mystyle4}>it check status of file which is inside computer</h1>
          </div>

          <div>
          <h2 style = {mystyle}>git commit -m "description" </h2>
          <button  style = {mystyle} onClick = {this.changeMsg4}>Show</button>
          <h1 style = {mystyle5}>it submit file for changed file</h1>
          </div>

          <div>
          <h2 style = {mystyle}>git remote add origin url </h2>
          <button  style = {mystyle} onClick = {this.changeMsg5}>Show</button>
          <h1 style = {mystyle6}>it choose path to push file in your github</h1>
          </div>

          <div>
          <h2 style = {mystyle}>git remote -v </h2>
          <button  style = {mystyle} onClick = {this.changeMsg6} >Show</button>
          <h1 style = {mystyle7}>it track branch or origin and see action of them</h1>
          </div>

          <div>
          <h2 style = {mystyle}>git push -u origin master </h2>
          <button  style = {mystyle}  onClick = {this.changeMsg7}>Show</button>
          <h1 style = {mystyle8}>it push file to where seted path</h1>
          </div>
      </div>
    );
  }
}

export default Header;
