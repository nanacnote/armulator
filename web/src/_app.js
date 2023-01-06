import './_app.global.css';
import { hot } from 'react-hot-loader';
import { Component } from 'react';
import { Layout, Header, Body, Footer } from './components/index';

class App extends Component {
  render() {
    return (
      <div className={'app-wrapper'}>
        <Layout header={<Header />} body={<Body />} footer={<Footer />} />
      </div>
    );
  }
}

export default hot(module)(App);
