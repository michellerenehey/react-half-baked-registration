import { useState } from 'react';
import AuthForm from '../components/AuthForm';
import { signInUser, signUpUser } from '../services/users';
import './Auth.css';
import dynamicClassNames from 'classnames';

export default function Auth({ setCurrentUser }) {
  // state for user interaction
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //state for error message
  const [message, setMessage] = useState(null);

  // type state
  const [type, setType] = useState('signin');

  // handleSubmit function for form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response =
        type === 'signin' ? await signInUser(email, password) : await signUpUser(email, password);
      setCurrentUser(response);
    } catch {
      setMessage('Something went wrong, try again!');
    }
  };
  return (
    <div>
      <div className="top">
        <h3
          onClick={() => setType('signin')}
          className={dynamicClassNames({ active: type === 'signin' })}
        >
          Sign In
        </h3>
        <h3
          onClick={() => setType('signup')}
          className={dynamicClassNames({ active: type === 'signup' })}
        >
          Sign Up
        </h3>
      </div>
      <AuthForm
        message={message}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
