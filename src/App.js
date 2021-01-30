import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import LoginScreen from './screens/LoginScreen/LoginScreen';
import MainScreen from './screens/MainScreen/MainScreen';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <LoginScreen/>
        </Route>
        <Route path="/main">
          <MainScreen />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
