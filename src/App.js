import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {PrivateRoute} from './components/Private'
import {Login} from './pages/User/Login'
import {Teacher} from './pages/Teacher/Teacher'

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path='/login'>
            <Login/>
          </Route>
          <PrivateRoute exact path='/teacher'>
            <Teacher/>
          </PrivateRoute>
        </Switch>
      </Router>
  );
}

export default App;
