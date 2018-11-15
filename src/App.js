import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes'

const App =(props)=> {
    return (
      <div className="App">
        <BrowserRouter>
        <Routes {...props}/>
        </BrowserRouter>
      </div>
    );
  }

export default App;