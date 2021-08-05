import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header } from './components';

function App() {
  return (
    <div className="font-roboto h-screen bg-red-500 ">
      <Header />
      <Switch>
        <Route path='/' exact>
          <h1 className='font-3d'>Tailwindite Pokedex</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
