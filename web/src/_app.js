import './_app.global.css';
import { hot } from 'react-hot-loader';
import { Component } from 'react';
import { Layout, Header, Body, Footer } from './components';

class App extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <Body />
        <Footer />
      </Layout>
    );
  }
}

export default hot(module)(App);
