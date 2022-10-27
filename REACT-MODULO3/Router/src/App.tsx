import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {Home} from './components/Home/Home'
import {About} from './components/About/About'
import {Contact} from './components/contact/Contact'
import {Index} from './components/Index/Index'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Index/>}>
      <Route path="home" element={<Home/>} />
      <Route path="about" element={<About/>} />
      <Route path="contact" element={<Contact/>} />
      </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

