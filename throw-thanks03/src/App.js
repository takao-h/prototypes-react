import React, { Component } from 'react';
import './App.css';
import Cards from './Cards';
// import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Footer from './Footer';

const link = 'hogehoge';
const thanksButton = (link) => {
  <Button component={link} to="/open-collective">
    Link 
  </Button>
}

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Cards />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
