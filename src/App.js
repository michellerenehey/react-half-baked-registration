import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Auth from '../src/views/Auth';

function App() {
  // add current user state
  return (
    <div className="App">
      {/* <p>i am the app component</p> */}
      <BrowserRouter>
        <Switch>
          <Route exact path="/auth">
            <Auth />
          </Route>
          <Route exact path="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
