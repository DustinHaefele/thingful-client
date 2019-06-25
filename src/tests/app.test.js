import App from '../components/App/App';
import React from 'react';
import ReactDOM from 'react-dom'
import LoginForm from '../components/LoginForm/LoginForm';


describe('Login Tests',() =>{

  it('renders LOGIN FORM without crashing', ()=>{
    const div = document.createElement('div')
    ReactDOM.render(<LoginForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('logs a user in if username and password match',()=>{
    //test code goes here
  });

  it('doesn\'t log the user in if user doesn\'t exist',()=>{
    //test here
  })

  it('doesn\'t log a user in if user exists but password doesn\'t match', ()=>{
    //test here
  })

});
