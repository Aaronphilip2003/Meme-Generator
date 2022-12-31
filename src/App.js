import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom'
import Navbar from './components/Navbar';
import Meme from './components/Meme'

function App() {
  return (
    <div>
      <style>{'body {background: linear-gradient(90.41deg, #711F8D 1.14%, #A818DA 100%);}'}</style>
      <Navbar/>
      <Meme/>
    </div>   
  );
}


ReactDOM.render(<App/>,document.getElementById("root"));
export default App;