import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Dashboard from './components/dashboard/Dashboard';
import ProductDetail from './components/products/ProductDetail';
import SignIn from './components/auth/SignIn';
import CreateProduct from './components/products/CreateProduct';
import About from './components/about/About';
import SignUp from './components/auth/SignUp';
import Error404 from './components/layout/Error404';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path='/' component={ Dashboard }></Route>
            <Route path='/product/:id' component={ ProductDetail }></Route>
            <Route path='/signin' component={ SignIn }></Route>
            <Route path='/createproduct' component={ CreateProduct }></Route>
            <Route path='/about' component={ About }></Route>
            <Route path='/signup' component={ SignUp }></Route>
            <Route path='*' component={ Error404 }></Route>
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
