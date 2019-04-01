import Reflux from 'reflux';
import Actions from '../Action/AppActions';
import Login from '../Services/Login';
import Siginup from '../Services/Signup'

const Response = {
  "feeds": [
    {
      "answer": [
        {
          "create_On": "27,10,18",
          "downvotes": 0,
          "id": 6,
          "string": "yes java is pure oop language",
          "upvotes": 0,
          "username": "amol"
        }
      ],
      "createdOn": "18,08,2018",
      "id": 2,
      "string": "is java pure oop?",
      "topic": {
        "name": "Computer Science",
        "topicId": "Education"
      },
      "username": "shiv",
      "view": 5
    },
    {
      "answer": [ {
        "create_On": "27,10,18",
        "downvotes": 0,
        "id": 1,
        "string": "i dont no photosynthesis",
        "upvotes": 0,
        "username": "amol"
      }],
      "createdOn": "19,08,2018",
      "id": 3,
      "string": "what is mean by Photosynthesis?",
      "topic": {
        "name": "Computer Science",
        "topicId": "Education"
      },
      "username": "guru",
      "view": 10
    },
    {
      "answer": [ {
        "create_On": "27,10,18",
        "downvotes": 0,
        "id": 3,
        "string": "first answer",
        "upvotes": 0,
        "username": "amol"
      }, {
        "create_On": "27,10,18",
        "downvotes": 0,
        "id": 4,
        "string": "first answer",
        "upvotes": 0,
        "username": "amol"
      }],
      "createdOn": "19,08,2018",
      "id": 4,
      "string": "what is mean by Photosynthesis?",
      "topic": {
        "name": "Computer Science",
        "topicId": "Education"
      },
      "username": "guru",
      "view": 10
    },
    {
      "answer": [],
      "createdOn": "21,08,2018",
      "id": 5,
      "string": "what is mean by Computer?",
      "topic": {
        "name": "Computer Science",
        "topicId": "Education"
      },
      "username": "shiv",
      "view": 4
    },
    {
      "answer": [],
      "createdOn": "21,08,2018",
      "id": 6,
      "string": "what is mean by Computer?",
      "topic": {
        "name": "Computer Science",
        "topicId": "Education"
      },
      "username": "raj",
      "view": 4
    }
  ]
}
const store = Reflux.createStore({
    listenables: [Actions],
    onGoToHome() {
      console.log("Action came into AppStore...");
      const triggerObj = {
        action: "HomeClicked",
        data: "Home data.."
      };
      this.trigger(triggerObj);
    },
    onGoNoteAdd(){
      console.log("action came into Appstore ");
      const triggerObj = {
        action: "NoteClicked",
        data: "note data"
      };
      this.trigger(triggerObj);
    },

    onGoTONotification(){
      console.log("action came  into Appstore ");
      const triggerObj = {
        action: "NotificationClicked",
        data: "Some data.."
      };
      this.trigger(triggerObj);
    },
    onGoToQuestion(){
      console.log("action came into Appstore ");
      const triggerObj = {
        action: "Answer",
        data: "Question"
      };
      this.trigger(triggerObj);
    },
    onGoToRegistrtion(){
      console.log("action came into Appstore");
      const triggerObj = {
        action: "NewRegistration",
        data: "Registration  data.."
      };
      this.trigger(triggerObj);
    },
    onLogin(email,password){
      console.log("login data at ", email,password)
      const user = Login(email,password)
    },
    onSignup(user){
      console.log( "sign up data at store",user)
      const signup = Siginup(user);
      
    }

  
});

export default store;