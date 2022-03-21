import { useState } from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Greeting from '../greeting/Greeting';

function LoginControl() {
  const [loggedIn, setLoggedIn] = useState(false);
  let button;

  const handleLoginClick = () => {
    setLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setLoggedIn(false);
  };

  if (loggedIn) {
    button = <LogoutButton onClick={handleLogoutClick} />;
  } else {
    button = <LoginButton onClick={handleLoginClick} />;
  }

  return (
    <div>
      <Greeting isLoggedIn={loggedIn} />
      {button}
    </div>
  );
}
export default LoginControl;
