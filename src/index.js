import React from 'react';
import ReactDOM from 'react-dom';
// css
import './css/index.css';
import './css/music-player.css';
import './css/media-query.css';
//  import from file
import { Generator } from './js/layout'


class App extends React.Component {

  render() {
    return(
      <div className="app">
        <Generator />
      </div>
    )
  }
}

// ========================================
// ====  USE STRICTMODE?     ======================
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

