import Home from './pages/Home';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Product from './pages/Product';
import Cart from './pages/Cart';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/cart'>
          <Cart />
        </Route>
        <Route path='/prod/:id'>
          <Product />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
