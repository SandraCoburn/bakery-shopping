import React from 'react';
import store from './state/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import AdminScreen from './screens/AdminScreen';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="grid-container">
            <header>
              <Link to="/">Bakery Shopping Cart</Link>
              <Link to="/admin">Admin</Link>
            </header>
            <main>
              <Route path="/admin" component={AdminScreen} />
              <Route path="/" component={HomeScreen} exact />
            </main>
            <footer>
              <span>&copy;</span> 2021 All rights reserved. Created by:
              <Link
                className="designer"
                href="https://www.sandracwebdeveloper.com/"
              >
                Sandra Coburn
              </Link>
              .
            </footer>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
