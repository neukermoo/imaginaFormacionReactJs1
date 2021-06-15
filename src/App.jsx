import React  from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import About from './Pages/About/About.page';
import Store from './Pages/Store/Store.page';
import Product from './Pages/Product/Product.page';
import Nav from './components/Nav/Nav.component';
import Login from './Pages/Login/Login.component';
import './App.scss';
import { useState } from 'react';
import logo from './logo.svg';
import { useSelector } from "react-redux";
import { ProtectedRoute } from "./components/Routes/ProtectedRoute.component";

export default function App() {
  const sesion = useSelector((state) => state.sesion);
  document.body.style = "background:grey";


  const [isLogged, setLogged] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1>MI TIENDA </h1>
      </header>
    
    


        <Router>
          {sesion ? <Nav /> : ""}

          <div>
          <Redirect from="/**" to={{
            pathname: '/',
            state: {
              badURL: true
            }
          }}/>

            <Route exact path="/" component={Login} />

            <ProtectedRoute exact path="/about" component={About}/>
            <ProtectedRoute exact path="/store" component={Store} />
            
            <ProtectedRoute path="/product/:id" component={Product}/>


            
          </div>
        </Router>

    </div>
  );
}
