import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './app.scss';
import TabBar from './nav/TabBar';
import TopBar from './nav/TopBar';
import Search from './search/Search';
import Bookings from './bookings/Bookings';
import Favorites from './favorites/Favorites';
import { useState } from 'react';

function App() {

  const [topBarState, setTopBarState] = useState(1);

  return (
    <BrowserRouter>
      <TopBar />
      <TabBar setTopBarState={setTopBarState} />
      <Switch>
        <Route exact path="/">
          <Search />
        </Route>
        <Route exact path="/bookings">
          <Bookings />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
