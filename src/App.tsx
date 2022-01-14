import React, { useContext, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import StartPage from './pages/StartPage'
import MainPage from './pages/MainPage/MainPage'
import hardCacheImage from './utils/hardCacheImage';
import pikachu from './assets/pikachu.png'
import { AppLoadingContext } from './contexts/AppLoadingContext';
import Details from './pages/Details/Details';

function App() {
  useEffect(() => {
    hardCacheImage(pikachu)
  }, [])

  const { isAppLoading } = useContext(AppLoadingContext)

  return (
    <div className="font-roboto bg-red-500">
      <div className='h-screen flex flex-col'>
        <Header />
        {isAppLoading && `loading`}
        <Route path='/pokedex/:name'>
          <Details />
        </Route>
        <Switch>
          <Route path='/pokedex'>
            <MainPage />
          </Route>
          <Route path='/'>
            <StartPage />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
