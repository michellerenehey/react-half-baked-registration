import { useState } from 'react';
import AuthForm from '../components/AuthForm';
import { signInUser, signUpUser } from '../services/users';

export default function Auth() {
  // set state for user interaction
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //state for error message
  const [message, setMessage] = useState(null);
  // need type state

  //need to create handleSubmit function for form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signUpUser(email, password);
      console.log(response);
    } catch {
      setMessage('Something went wrong, try again!');
    }
  };
  return (
    <div>
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
