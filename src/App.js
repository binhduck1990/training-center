import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {PrivateRoute} from './components/Private'
import TeacherDashboard from './pages/Teacher/TeacherDashboard'
import Exam from './pages/Teacher/Exam';

function App() {
  return (
      <Router>
        <Switch>
          <PrivateRoute exact path='/'>
            <TeacherDashboard/>
          </PrivateRoute>
          <PrivateRoute exact path='/exam'>
            <Exam/>
          </PrivateRoute>
        </Switch>
      </Router>
  );
}

export default App;
