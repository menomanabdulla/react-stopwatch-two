import React,{Component} from 'react'
import './title.css'
class Title extends Component{
    
    state = {
        title: 'Hello world',
        isInput: false
    }
    changeTitle = (event) =>{
        this.setState({
            ...this.sate,
            title: event.target.value
        })
        //console.log(this.state.title)
    }
    hideINput(e){
        if(e.key === 'Enter'){
            if(this.state.title == ''){
                this.setState({
                    ...this.sate,
                    title: 'This is default title'
                })
            }
            this.setState({
                ...this.sate,
                isInput: false
            })
        }
    }
    hideINput2(e){
        if(this.state.title == ''){
            this.setState({
                ...this.sate,
                title: 'This is default title'
            })
        }
        this.setState({
            ...this.sate,
            isInput: false
        })
    }
    editHandelar(){
        this.setState({
            ...this.state,
            isInput: true
        })
    }
    render(){
        let output = null
        if(this.state.isInput){
            output = (
                <div className="d-flex title">
                    <input type="text" 
                    onChange = { e=> this.changeTitle(e) } 
                    onKeyPress = { e=> this.hideINput(e) } 
                    onBlur = { e => this.hideINput2(e)}
                    value={this.state.title}/>
                </div>
            )
        }else{
            output = (
                <div className="d-flex title">
                    <h1 className="display-4 title-text">{this.state.title}</h1>
                    <span onClick={ ()=>this.editHandelar() } className="ml-auto edit-icon">
                        <i className="fas fa-pencil-alt"></i>
                    </span>
                </div>
             )
        }
        return(
            <div>
                {output}
            </div>
        )
    }
}

export default Title