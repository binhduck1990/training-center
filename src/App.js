import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {PrivateRoute} from './components/Private'
import TeacherDashboard from './pages/Teacher/TeacherDashboard'
import Exam from './pages/Teacher/Exam';
import CourseList from './pages/Teacher/CourseList';
import StudentList from './pages/Teacher/StudentList';

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
          <PrivateRoute exact path='/course'>
            <CourseList/>
          </PrivateRoute>
          <PrivateRoute exact path='/students'>
            <StudentList/>
          </PrivateRoute>
        </Switch>
      </Router>
  );
}

export default App;