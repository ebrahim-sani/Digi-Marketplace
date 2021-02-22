import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import CustomerDashboard from "./pages/CustomerDashboard";
import Orders from "./components/Orders";
import Overview from "./components/Overview";
import Payment from "./components/Payment";
import MarketPlace from "./pages/MarketPlace";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="dashboard__body">
          <Switch>
            <Route path="/customer/dashboard/overview">
              <Overview />
            </Route>
            <Route path="/customer/dashboard/payments">
              <Payment />
            </Route>

            <Route path="/customer/dashboard/orders">
              <Orders />
            </Route>
          </Switch>
        </div>
        <Switch>
          <Route path="/marketplace">
            <MarketPlace />
          </Route>
          <Route path="/customer/dashboard">
            <CustomerDashboard />
          </Route>
          <Route path="/vendor/dashboard">
            <Dashboard />
          </Route>
          <Route path="/vendor/register">
            <Register />
          </Route>
          <Route path="/vendor/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
