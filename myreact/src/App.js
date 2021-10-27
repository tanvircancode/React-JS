import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Navbar from './components/Navbar';
import Posts from './components/Posts';
import Dashboard from './components/Dashboard';

import Error from './components/Error';

export default function App() {
  const isLoggedIn = false;

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services">
            <Services number="5" />
          </Route>

          <Route
            exact
            path="/services"
            render={() => <Services number="3" />}
          />

          <Route exact path="/posts/:category/:topic" component={Posts} />

          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/home" component={Home} />

          <Route exact path="/login">
            {isLoggedIn ? <Redirect to="/dashboard" /> : <Home />}
          </Route>

          <Route component={Error} />
        </Switch>
      </Router>
    </>
  );
}
