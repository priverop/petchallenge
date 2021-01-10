import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NotFoundPage from './containers/NotFoundPage';
import Home from './containers/Home/Home';
import PetPage from './containers/PetPage/PetPage';

const App = () => (
  <BrowserRouter>
    <div className="App" data-testid="main-app">
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/pet/:id" component={PetPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
