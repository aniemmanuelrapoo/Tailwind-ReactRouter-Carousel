import { Route, Switch } from 'react-router';
import './App.css';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Home from './pages/index';
import About from './pages/about';
import Menu from './pages/menu';
import Dropdown from './component/Dropdown';
import { useEffect, useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
      setIsOpen(!isOpen)
  }
  useEffect(() => {
    const hideMenu = () => {
      if(window.innerWidth > 768 && isOpen){
        setIsOpen(false)
        console.log('i resizeddddd')
      }
    }
    window.addEventListener('resize', hideMenu)
    return () => {
      window.removeEventListener('resize', hideMenu)
    }
  })
  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/menu" exact component={Menu} />
        <Route path="/about" exact component={About} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
