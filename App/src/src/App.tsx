import React from 'react'
import { useSelector } from 'react-redux';
import Header from './Header';
import Home from './Service/Home';
import './App.css';


function App() {
  const { headerNavigation } = useSelector((state: {headerNavigation: string}) => state)

  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  )
}

export default App;
