import React, { Component } from 'react';

import TwitterLogo from '../twitter.svg';
import './Login.css';

export default class Login extends Component {
  state = {
    username: '',
  };

  componentDidMount() {
    const author = localStorage.getItem('@GoTwitter:username');

    if (!author) return;

    this.props.history.push('/timeline');
  }

  handleSubmit = e => {
    e.preventDefault();

    const { username } = this.state;

    if (!username.length) return;

    localStorage.setItem('@GoTwitter:username', username);

    this.props.history.push('/timeline');
  }

  handleInputChange = e => {
    this.setState({ username: e.target.value })
  }

  render() {
    return (
      <div className="login-wrapper">
        <img src={ TwitterLogo } alt="Twitter Logo" />

        <form onSubmit={ this.handleSubmit }>
          <input
            placeholder="Nome de usuário"
            value={ this.state.username }
            onChange={ this.handleInputChange }
            />
          <button type="submit">Entrar</button>
        </form>
      </div>
    );
  }
}
