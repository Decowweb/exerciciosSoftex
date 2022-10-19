import { PrimeiroComponent } from './components/componentTest'
import {useState} from 'react'
import './App.css'

function App() {
  
  const [name, setName] = useState('Andre Bottentuit') 
  
  const changeName = (e) => {
    setName(e.target.value)
    
  }
 
  return (
    <div>
      <input onChange={changeName} placeholder="Digite seu nome"></input>
     <PrimeiroComponent name={name} />
    </div>
  );
}

export default App;
