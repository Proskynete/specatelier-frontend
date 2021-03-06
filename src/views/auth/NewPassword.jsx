import React from 'react';
import { Link } from 'react-router-dom';
import NewPasswordContainer from '../../containers/auth/new-password/NewPassword.container';
import {
  Container,
  SectionLeft,
  SectionRight,
  Image,
  Logo,
} from './Auth.styles';

import Alert from '../../containers/alert/Alert.container';
/**
 * The Login's view.
 */
const Login = () => {
  return (
    <Container>
      <SectionLeft>
        <Image>
          <Link to="/" data-view="home" >
            <Logo />
          </Link>
        </Image>
      </SectionLeft>
      <SectionRight>
        <NewPasswordContainer />
      </SectionRight>
			<Alert />
    </Container>
  );
};

export default Login;
