import React from 'react'
import { useSelector } from 'react-redux';
import Header from './Header';
import Home from './Service/Home';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import './App.css';


function App() {
  const { headerNavigation } = useSelector((state: {headerNavigation: string}) => state)
  localStorage.setItem('languageCode', 'gb')
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  )
}

export default App;
