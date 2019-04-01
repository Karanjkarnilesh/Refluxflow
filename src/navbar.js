import React from 'react';
import  {Navbar,NavItem,Icon} from "react-materialize";
import AppActions from './Action/AppActions'; 

export default class Mynavbar extends React.Component{

    onNotificationClicked(){
         console.log("Notification Icon clicked");
         AppActions.goTONotification();
    }
    onQuestionClicked(){
        console.log("Question Icon Clicked");
        AppActions.goToQuestion();
        
    }
    onHomeClicked(){
        console.log("Home clicked")
        AppActions.goToHome();
    }
    onNoteClicked(){
        console.log("Note clicked")
        AppActions.goNoteAdd();
    }
    NewUser(){
        console.log("User New Clicked")
        AppActions.goToRegistrtion()
    }
    render(){
        return<div> <Navbar brand='Quora' right>
            <NavItem onClick={this.NewUser}>New User</NavItem>
                <NavItem onClick={this.onHomeClicked}><Icon>home</Icon></NavItem>
                <NavItem onClick={this.onNoteClicked}><Icon>note_add</Icon></NavItem>
                <NavItem onClick={this.onNotificationClicked}><Icon>notifications</Icon></NavItem>
                <NavItem onClick={this.onQuestionClicked}><Icon>question_answer</Icon></NavItem>
                </Navbar>
  </div>
    }
 }