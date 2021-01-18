import React from 'react';
import store from './state/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import AdminScreen from './screens/AdminScreen';
import GalleryScreen from './screens/GalleryScreen';
import About from './components/About';
import Footer from './components/Footer';
import Logo from './components/Logo';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="grid-container">
            <header>
              <Logo />
              <Link to="/">Home</Link>
              <Link to="/about"> About</Link>
              <Link to="/cart">Bakery Shopping Cart</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/admin">Admin</Link>
            </header>
            <main>
              <Route path="/admin" component={AdminScreen} />
              <Route path="/gallery" component={GalleryScreen} />
              <Route path="/about" component={About} />
              <Route path="/cart" component={CartScreen} />
              <Route path="/" component={HomeScreen} exact />
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
