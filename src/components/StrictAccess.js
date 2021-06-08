import React, { Component } from 'react';
// import Home from './components/Home';
import { Redirect } from 'react-router-dom';

class StrictAccess extends Component {
  constructor() {
    super()
    this.state = {
      validLogin: false
    }
  }
  
  handleLogin(username, password) {
    if(username === 'joao' && password === 1234){
      this.setState({
        validLogin: true
      })
      return alert(`Olá ${username}`)
    }
    alert('Login Inválido')
  }


  componentWillMount() {
    const { username, password } = this.props
    this.handleLogin(username, password)
  }

  render() {
    const { username } = this.props
    if(!this.state.validLogin){
      return <Redirect to='/'/>
    }
    return(
      <div>
        <h1>Acesso Restrito</h1>
        <p>Este é o espaço do agente { username }</p>
      </div>
    )
  }
}

export default StrictAccess;