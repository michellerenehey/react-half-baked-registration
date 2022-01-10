import { useState } from 'react';
import AuthForm from '../components/AuthForm';

export default function Auth() {
  // set state for user interaction
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <AuthForm email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
    </div>
  );
}
