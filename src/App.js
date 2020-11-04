import React from 'react';
import Layout from './components/layout/Layout';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './views/dashboard/Dashboard';
function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
            <Route path="/" exact component={Dashboard} />
          
          </Switch>
      </Layout>
    </div>
  );
}

export default App;
