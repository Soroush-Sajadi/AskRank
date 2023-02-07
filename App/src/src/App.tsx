import React from 'react'
import { useSelector } from 'react-redux';
import Header from './Header';
import './App.css';


function App() {
  const { headerNavigation } = useSelector((state: {headerNavigation: string}) => state)

  return (
    <div className="App">
      <Header />
    </div>
  )
}

export default App;
