import { useState } from 'react';
import AuthForm from '../components/AuthForm';
import { signInUser, signUpUser } from '../services/users';

export default function Auth() {
  // set state for user interaction
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // need type state

  //need to create handleSubmit function for form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await signUpUser(email, password);
    console.log(response);
  };
  return (
    <div>
      <AuthForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
