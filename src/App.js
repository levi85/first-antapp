import React, { Component } from 'react';
import logo from './logo.svg';
import { DatePicker } from 'antd';
import { Rate } from 'antd';
import { TimePicker } from 'antd';
import moment from 'moment';

import './App.css';
import 'antd/dist/antd.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div>
        <DatePicker />
        <TimePicker onChange={onChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
        <Rate />
      </div>
        
      </div>
    );
  }

}

function onChange(time, timeString) {
  console.log(time, timeString);
}

export default App;
