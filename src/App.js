import React, {Component} from 'react';
import './App.css';
import CounterPanel from './components/counter/CounterPanel';

export default class App extends Component {
    render() {
        return (
            <div className="app">
              <CounterPanel
                  {...{
                      panelName: 'A'
                  }}
              />
              <CounterPanel
                  {...{
                      panelName: 'B'
                  }}
              />
            </div>
        );
    }
}
