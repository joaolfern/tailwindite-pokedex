import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header } from './components';
import { StartPage } from './pages';

function App() {
  return (
    <div className="font-roboto h-screen bg-red-500">
      <div className='max-w-5xl h-screen flex flex-col'>
        <Header />
        <Switch>
          <Route path='/' exact>
            <StartPage />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
