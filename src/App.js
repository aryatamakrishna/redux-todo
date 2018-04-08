import React, { Component } from 'react';
// import logo from './logo.svg';
import './css/App.css';

import TaskList from './component/TaskList/TaskList.js'

class App extends Component {
  render() {
    return (
      <div>
        <TaskList />
      </div>
    );
  }
}

export default App;
