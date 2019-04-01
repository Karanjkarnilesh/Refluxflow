import React from "react";
export default class Note extends React.Component{
constructor(){
    super();
    this.onNotesClicked=this.onNotesClicked.bind(this);
}
onNotesClicked(){
    console.log("this.props.showlogin",this.props.showLogin)
    if(!this.props.showLogin){
        alert("Helloooo")
     }
}
    render(){
       
    return(<div>
        <p>At note</p>
        {this.onNotesClicked}
        {this.onQuestionClicked}
        </div>);
}

}