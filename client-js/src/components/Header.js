import React from 'react';

import { Counter } from '../features/counter/Counter';


function Header() {
  return (
    <header className="App-header">
      <Counter />

      <div className="Links">
        <a className="App-link" href="https://reactjs.org/">React</a>
        <a className="App-link" href="https://redux.js.org/">Redux</a>
        <a className="App-link" href="https://redux-toolkit.js.org/">Redux Toolkit</a>
        <a className="App-link" href="https://react-redux.js.org/">React Redux</a>
      </div>
    </header>
  );
}

export default Header;
