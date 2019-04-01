import React from 'react';

import {Row,Input,Col,ProgressBar,Modal,Button,Tab,Tabs} from 'react-materialize';
import AppActions from './AppActions';
export default class Body extends React.Component{
constructor(){
    super()
    this.NewUser = this.NewUser.bind(this);
    this.getLoginData = this.getLoginData.bind(this);
    this.onLoginClicked = this.onLoginClicked.bind(this);
    this.getBody=this.getBody.bind(this);
}
getBody(){

  console.log("feeds",this.props.feeds)
}

    getLodeBar(){
        if(this.props.showLoder)
        {
            return(<div className="Body">
                <Col s={12}>
                     <ProgressBar />
                </Col>
            </div>);
        }      
    }
    onLoginClicked(){
      const email = document.getElementById("email").value;
      const pass =  document.getElementById("pass").value;
      console.log("data at Login ", email,pass)
    AppActions.Login(email,pass);
    }

    getLoginData(){
      console.log("!getLoginData!")
        const username = document.getElementById("username").value;
        const firstName = document.getElementById("first_name").value;
        const lastName = document.getElementById("last_name").value;
        const phone= document.getElementById("phone").value;
        const email= document.getElementById("email_ID").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm_password").value;
        const maleGender = document.getElementById("male").checked;
        const gender = maleGender ? "male" : "female";
        const dob=document.getElementById("birthdate").value

        if(password !== confirmPassword){
          console.log("password not correct")
        }
        else{
        console.log(dob)
        console.log(password)
        console.log(gender) 
        console.log(email)
        console.log(phone)
        console.log(lastName)
        console.log(firstName)
        console.log(username)
        }   
        const user={
          dob,
          password,
          gender,
          email,
          phone,
          lastName,
          firstName,
          username
        };
        console.log("data at body ",user)
        AppActions.Signup(user)
        
    }
    NewUser(){
       return(<div className= "Body"> 
       <Modal open={this.props.showLogin}
      actions={
        <div>
          <Button waves = "light" className= "red darken-2" >close</Button>
        </div>
      }>
       <Tabs className='tab-demo z-depth-1'>
          <Tab title="Login" active>
            <Row>
              <Input type="text" label="Email" s={12} id="email"/>
              <Input type="text" label="password" s={12} id="pass"/>
            </Row>
            <Row>
              <Button onClick={this.onLoginClicked}>Login</Button>
            </Row>
          </Tab>
          <Tab title="Sign Up">
            <Row>
              <Input type="text" label="Username" s={6} id="username"/> 
              <Input type="text" label="First name" s={6} id="first_name"/>
              <Input type="text" label="Last Name" s={6} id="last_name"/>
              <Input type="text" label="email" s={8} id="email_ID"/>
              <Input type="text" label="Phone" s={6} id="phone"/>
              <Input type="text" label="YYYY-MM-DD" id="birthdate"/>
              <Input type="text" label="password" s={8} id="password"/>
              <Input type="text" label="confirm_password" s={8} id="confirm_password"/>
              <br/>
              <Input type="radio" name="gender" id="male" label="Male" checked/>
              <Input type="radio" name="gender" id="female" label="Female"/>     
            </Row>
            <Row>
              <Button onClick={this.getLoginData}>Sign Up</Button>
            </Row>
          </Tab>
        </Tabs>
        </Modal>
      </div>);
 }
      
    render(){
        return(<div>
            {this.getLodeBar()}
            {this.NewUser()}
            {this.getBody()}
        </div>);

    }
}