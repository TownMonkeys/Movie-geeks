import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyles from './global.css';
import './App.scss';
import Header from './components/header';
import Home from './pages/home';
// import Profile from './pages/profile/Profile';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <div className="App">
        {/* {state} */}
        <Header />
        <main className="main" role="main">
          <Switch>
            <Route path="/" exact component={Home} />
            {/* <Route path="/profile" component={Profile} /> */}
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;