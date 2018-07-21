import React,{Component} from 'react'

class Controller extends Component{
    state = {
        start: true,
        pause: false,
        lap: false,
        reset: false
    }
    startHandeller () {
        this.setState({
            ...this.state,
            start: false,
            pause: true,
            lap: true
        })
        this.props.start()
    }
    pauseHandeller(){
        this.setState({
            ...this.state,
            start: true,
            pause: false,
            lap: false,
            reset: true
        })
        this.props.pause()
    }
    lapHandeller(){

    }
    resetHandeller(){
        this.setState({
            ...this.state,
            start: true,
            pause: false,
            lap: false,
            reset: false
        })
        this.props.reset()
    }
    getController(){
        let output = null
        if(this.state.start && !this.state.reset){
            output = (
                <div>
                    <button className= 'btn btn-success btn-lg px-5' onClick={event=>this.startHandeller()} >Start</button>
                </div>
            )
        }else if(this.state.pause && this.state.lap){
            output = (
                <div>
                    <button className= 'btn btn-primary btn-lg px-5 ml-5' onClick={event=>this.pauseHandeller()} >Pause</button>
                    <button className= 'btn btn-warning btn-lg px-5 ml-5' onClick={event=>this.lapHandeller()} >Lap</button>
                </div>
            )
        }else if(this.state.start && this.state.reset){
            output = (
                <div>
                    <button className= 'btn btn-success btn-lg px-5' onClick={event=>this.startHandeller()} >Start</button>
                    <button className= 'btn btn-danger btn-lg px-5 ml-5' onClick={event=>this.resetHandeller()} >Reset</button>
                </div>
            )
        }
        return output
    }
   
    render(){
        return this.getController()
    }
}

export default Controller