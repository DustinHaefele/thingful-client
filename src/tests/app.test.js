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

});
