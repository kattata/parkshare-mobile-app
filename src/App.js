import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SideMenu from './nav/SideMenu';
import TabBar from './nav/TabBar';
import TopBar from './nav/TopBar';
import Home from './search/Search';
import './app.scss';

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <SideMenu />
      <TabBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
