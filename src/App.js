import Navbar from './Navbar';
import Home from './Home';
import Create from './Create'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogDetais from './BlogDetails';
import NotFound from './NotFound';
import ToDoList from './ToDoList';
import Reminder from './Reminder';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/create">
                <Create />
              </Route>
              <Route path="/blogs/:id">
                <BlogDetais />
              </Route>
              <Route path="/toDoList">
                <ToDoList />
              </Route>
              <Route path="/reminder">
                <Reminder />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;
