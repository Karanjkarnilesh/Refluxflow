import React, { Component } from 'react';
import './App.css';
import Navbar from './navbar';
import Appstore from './Store/AppStore';
import Reflux from 'reflux';
import Body from './Action/body';
import Notes from './Notes';
import Questions from './Services/Questions';
const listenermixin = Reflux.ListenerMixin;

class App extends Component {
  constructor(){
    super();
    this.state ={
      showLogin : false,
      showLoder : true,
      showNotes : false ,
      isuserLogin: true     
    }
    this.onAppStore =this.onAppStore.bind(this);
    listenermixin.listenTo(Appstore,this.onAppStore)
  }
  onAppStore(triggerObj) {
    if(triggerObj.action === 'HomeClicked'){
      const newState = this.state;
      newState.showHome = true
      console.log("Registraion",this.state.showHome)
      this.setState(newState)
      console.log("come at app component",  triggerObj.data)
    } 
    if(triggerObj.action === 'NoteClicked'){
      const newState= this.state;
      newState.showNotes = false;
      this.setState(newState)
      console.log("come at app component", triggerObj.data)
    }
    if(triggerObj.action === "NotificationClicked"){
      console.log("come at app Component", triggerObj.data)
    }
    if(triggerObj.action === "Answer"){
      console.log("come at app Component", triggerObj.data)
    }
    if(triggerObj.action === "NewRegistration"){
      const newState = this.state;
      newState.showLogin = true;
      console.log("Registraion",this.state.showLogin)
      this.setState(newState) 
      console.log("come at app Component", triggerObj.data)
    }    
  }

  componentWillMount(){
    console.log("All Will Do Will")
  }
  render() {
    return(<div>
           <Navbar/>
            <Body showLoder={this.state.showLoder} showLogin={this.state.showLogin} feeds={this.state.feeds}/>
            <Notes showLogin={this.state.showLogin}/>
            <Questions showLogin={this.state.showLogin} isuserLogin={this.state.isuserLogin}/>
          </div>);
  }
}

export default App;
