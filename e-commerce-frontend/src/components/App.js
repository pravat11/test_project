import React from 'react';

import Header from './header';
import Footer from './footer';
import BodyWrapper from './body/BodyWrapper';
import { getAllProducts } from '../services/products';
import { login } from '../services/auth';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      products: []
    };
  }

  async componentDidMount() {
    const accessToken = await localStorage.getItem('ACCESS_TOKEN');

    if (!accessToken) {
      const loginResponse = await login('user2', 'helloworld');

      await localStorage.setItem('ACCESS_TOKEN', loginResponse.accessToken);
      await localStorage.setItem('REFRESH_TOKEN', loginResponse.refreshToken);
      await localStorage.setItem('USER_NAME', loginResponse.username);
    }

    try {
      const products = await getAllProducts();

      console.log('Products:', products);
    } catch (err) {
      console.log('Error:', err);
    }
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <BodyWrapper />
        <Footer />
      </React.Fragment>
    );
  }
}
export default App;
