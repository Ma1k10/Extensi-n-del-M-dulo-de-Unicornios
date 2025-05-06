import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { UnicornProvider } from './context/UnicornContext';
import UnicornsView from './unicorns/UnicornsView';
import UnicornForm from './unicorns/UnicornForm';

const App = () => {
  return (
    <Router>
      <UnicornProvider>
        <Switch>
          <Route path="/unicornios" exact component={UnicornsView} />
          <Route path="/unicornios/crear" exact component={UnicornForm} />
          <Route path="/unicornios/editar/:id" component={UnicornForm} />
        </Switch>
      </UnicornProvider>
    </Router>
  );
};

export default App;
