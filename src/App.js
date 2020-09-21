import React from 'react';
import './App.css';

import Grid from './components/Grid.js'

import {useSelector} from 'react-redux';

function App() {
  const counter = useSelector(state => state.counter)
  return (
    <div>
      <h2>Counter: {counter}</h2>
      <Grid />
    </div>
  );
}

export default App;
