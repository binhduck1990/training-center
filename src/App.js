import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {PrivateRoute} from './components/Private'
import TeacherDashboard from './pages/Teacher/TeacherDashboard'

function App() {
  return (
      <Router>
        <Switch>
          <PrivateRoute exact path='/'>
            <TeacherDashboard/>
          </PrivateRoute>
        </Switch>
      </Router>
  );
}

export default App;
