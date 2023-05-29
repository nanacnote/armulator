import './_app.global.css';
import { Component } from 'react';
import { GlobalData } from './context/GlobalData';
import { Layout, Header, Body, Footer } from './components';

export default class App extends Component {
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
