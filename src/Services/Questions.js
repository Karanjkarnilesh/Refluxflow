import React, {Component} from 'react';
import{Button,Row,Input,Cardpanel} from 'react-materialize';
export default class Questions extends Component{
    constructor(){
        super()        
    }
    AnswerPost(){
        console.log("AnswerPost Clicked")
    }

    render(){
        console.log("At Ouestion  showLogin",this.props.showLogin)
        console.log("At Ouestion  isuserLogin",this.props.isuserLogin)
        const question = this.props.feed
        console.log("question",question);
        return(<div> <Input label='your answer' s={6} >
        </Input><Button onClick={this.AnswerPost}>Button</Button>
        </div>);

       
    }
} 