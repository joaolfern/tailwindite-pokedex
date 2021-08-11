import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header } from './components';

function App() {
  return (
    <div className="font-roboto h-screen bg-red-500">
      <div className='max-w-5xl h-screen'>
        <Header />
        <Switch>
          <Route path='/' exact>
            <h1 className='font-3d text-pallet-yellow-400 text-5xl'>Tailwindite Pokedex</h1>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
