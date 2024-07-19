import React from "react";
import AuteurList from "./components/AuteurList";
import LivreList from "./components/LivreList";
import AuteurForm from "./components/AuteurForm";
import LivreForm from "./components/LivreForm";

const App = () => {
  return (
    <div>
      <h1>Bibliothèque</h1>
      <AuteurForm />
      <LivreForm />
      <AuteurList />
      <LivreList />
    </div>
  );
};

// import logo from "./logo.svg";
// import "./App.css";

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

export default App;
