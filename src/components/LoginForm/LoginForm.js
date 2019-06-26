import React, { Component } from 'react'
import { Button, Input } from '../Utils/Utils'
import TokenService from '../../services/token-service'
import config from '../../config'

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  }

  state = { error: null }

  handleSubmitJwtAuth = ev => {
    ev.preventDefault()
    this.setState({error:null});
    const { user_name, password } = ev.target

    fetch(`${config.API_ENDPOINT}/login`, {
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
    },
      body: JSON.stringify({user_name: user_name.value, password: password.value})
    })
    .then(res=> {
      if (!res.ok)  {
        return res.json().then(e=> Promise.reject(e))}  
      return res.json();
    })
    .then(res => {
      user_name.value = ''
      password.value = ''
      TokenService.saveAuthToken(res.authToken);
      this.props.onLoginSuccess()
    }).catch(err=>{this.setState({error: err})
    });
  };

  render() {
    const { error } = this.state
    return (
      <form
        className='LoginForm'
        onSubmit={this.handleSubmitJwtAuth}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='user_name'>
          <label htmlFor='LoginForm__user_name'>
            User name
          </label>
          <Input
            required
            name='user_name'
            id='LoginForm__user_name'>
          </Input>
        </div>
        <div className='password'>
          <label htmlFor='LoginForm__password'>
            Password
          </label>
          <Input
            required
            name='password'
            type='password'
            id='LoginForm__password'>
          </Input>
        </div>
        <Button type='submit'>
          Login
        </Button>
      </form>
    )
  }
}
