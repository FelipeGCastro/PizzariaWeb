import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginActions from '../../store/ducks/auth';

import Logo from '../../assets/Imagens/logo.svg';
import {
  Container, LogoImage, EmailInput, PasswordInput, SignButton,
} from './styles';

class Login extends Component {
  static propTypes = {
    loginRequest: PropTypes.func.isRequired,
  };

  state = {
    email: '',
    password: '',
  };

  componentDidMount = () => {};

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLogin = () => {
    const { email, password } = this.state;
    const { loginRequest } = this.props;
    loginRequest(email, password);
  };

  render() {
    const { email, password } = this.state;
    return (
      <Container>
        <LogoImage src={Logo} />
        <EmailInput
          value={email}
          name="email"
          placeholder="Seu e-mail"
          required
          type="email"
          onChange={this.handleInputChange}
        />
        <PasswordInput
          value={password}
          name="password"
          required
          placeholder="Senha secreta"
          onChange={this.handleInputChange}
          type="password"
        />
        <SignButton onClick={this.handleLogin}>Entrar</SignButton>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(LoginActions, dispatch);
export default connect(
  null,
  mapDispatchToProps,
)(Login);
