import Nav from './components/Nav';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';
import './App.css';
export default function App() {
  return (
    <div className= "App">
      <BrowserRouter>
        <Nav />
        <Routes>
        <Route path='/' element= {<h1> Products component</h1>} />
        <Route path='/add' element= {<h1> Add Products component</h1>} />
        <Route path='/update' element= {<h1> Update Products component</h1>} />
        <Route path='/logout' element= {<h1> Logout component</h1>} />
        <Route path='/profile' element= {<h1> Profile component</h1>} />
        </Routes> 
      </BrowserRouter>
      <Footer />
    </div>
  );
}
