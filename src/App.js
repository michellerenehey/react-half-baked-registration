import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import { getUser } from './services/users';
import Auth from '../src/views/Auth';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());

  return (
    <div className="App">
      <p>i am the app component</p>
      <BrowserRouter>
        <Switch>
          {/* <Route exact path="/auth">
            <Auth />
          </Route> */}
          <Route exact path="/">
            {currentUser && <h1>i am signed in</h1>}
            {!currentUser && <Auth setCurrentUser={setCurrentUser} />}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
