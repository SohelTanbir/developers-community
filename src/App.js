import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Tutorial from './components/Service/Tutorial';


function App() {
  return (
    <Router>
    <Header/>

    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/home">
        <Home/>
      </Route>
      <Route exact path="/tutorial">
        <Tutorial/>
        </Route>
      <Route exact path="/blog">
        <Blog/>
        </Route>
      <Route exact path="/contact">
        <Contact/>
        </Route>
    </Switch>
    </Router>

  );
}

export default App;
