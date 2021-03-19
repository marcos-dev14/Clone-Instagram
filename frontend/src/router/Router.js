import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Feed } from '../pages/Feed';
import { Login } from '../pages/Login';
import { Post } from '../pages/Post';
import { Profile } from '../pages/Profile';
import { Register } from '../pages/Register';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>

        <Route path="/feed">
          <Feed />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        <Route path="/post">
          <Post />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;