import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import { getUser } from './services/users';
import Auth from '../src/views/Auth';
// import kamala from './kamala.jpeg';

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
            {/* {currentUser && <h1>logged in</h1>} */}
            {/* {currentUser && <img src={`${kamala} />} */}
            {currentUser && <img src={process.env.PUBLIC_URL + '/kamala.jpeg'} />}
            {!currentUser && <Auth setCurrentUser={setCurrentUser} />}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
