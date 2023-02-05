import './_app.global.css';
import { hot } from 'react-hot-loader';
import { Component } from 'react';
import { GlobalData } from './context/GlobalData';
import { Layout, Header, Body, Footer } from './components';

class App extends Component {
  render() {
    return (
      <GlobalData>
        <Layout>
          <Header />
          <Body />
          <Footer />
        </Layout>
      </GlobalData>
    );
  }
}

export default hot(module)(App);
