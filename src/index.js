import React from 'react';
import ReactDOM from 'react-dom';
//  import from file
import { Main } from './main/main'


class App extends React.Component {

  render() {
    return(
      <div className="app">
        <Main />
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

