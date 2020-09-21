import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from './Views/Home';
import About from './Views/About';
import Product from './Views/Product';

function App() {
    return (
        <Router>
            <Header/>
              <Switch>
                <Route exact path="/">
                  <Home/>
                </Route>
                <Route path="/about">
                  <About/>
                </Route>
                <Route path="/products">
                  <Product/>
                </Route>
              </Switch>
          <Footer/>
        </Router>
    );
}

export default App;
