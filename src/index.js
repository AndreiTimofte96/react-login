import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Landing from "./pages/landing";
import FourOhFour from "./pages/fourOhFour";
import store from './store/store';
import { Provider } from 'react-redux';


const App = () => {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <div className =  "app">
      <Switch>
        <Route exact path = "/" component = {Landing} />  
        <Route  component = {FourOhFour}/>
      </Switch> 
      </div>
    </BrowserRouter>
    </Provider>
  );
};
render(<App />, document.getElementById('app'));