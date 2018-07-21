import React, { Component } from 'react';
import './App.css';
import Title from './titleComponent/title'
import CountDown from './countdown/countdown'
import Controller from './controller/controller'
class App extends Component {
  state = {
    time:{
      min: 0,
      sec: 0,
      mili: 0
    }
  }
  getStart(){
    this.intervalID = setInterval(()=>{
      let min = this.state.time.min
      let sec = this.state.time.sec
      let mili = this.state.time.mili

      if(mili>=10){
        sec = sec+1
        mili = 0
      }
      if(sec >= 60){
        min = min+1
        sec = 0
      }
      this.setState({
        ...this.state,
        time:{
          min,
          sec,
          mili: mili+1
        }
      })

    },100)
}

getPause(){
  clearInterval(this.intervalID)
}
getReset(){
  this.setState({
    time:{
      min: 0,
      sec: 0,
      mili: 0
    }
  })
}
getLap(){
  
}
  render() {
    return (
      <div className="App">
        <div className="container">
         <Title />
          <CountDown time = {this.state.time}/>
          <Controller 
            start = {this.getStart.bind(this)}
            pause = {this.getPause.bind(this)}
            reset = {this.getReset.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default App;
