import React from 'react';
import './App.css';

import Grid from './components/Grid.js'

import {useSelector, useDispatch} from 'react-redux';
import {increment} from './actions'

function App() {
  const counter = useSelector(state => state.counterReducer)
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increment())}>+</button>
      <h2>Counter: {counter}</h2>
      <Grid />
    </div>
  );
}

export default App;
