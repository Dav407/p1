// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react'

const api ='https://jsonplaceholder.typicode.com/photos'
const alb = 'https://jsonplaceholder.typicode.com/albums'
const App = () => {
  const fetchData = () => {
    fetch(api)
    .then( (res) => res.json() )
    .then( (data) => console.log(data) )
    .catch( (e) => console.log(e) )
  }
  const Albums = () => {
    fetch(alb)
    .then( (albs) => albs.json() )
    .then( (alpha) => console.log(alpha))
  }

  return (
    <div>
      <button onClick={fetchData}>Fetch data</button>
      <button onClick={Albums}>Albums api</button>
      
    </div>
  )
}

export default App