import './App.css';
import { DrumPads } from '../src/Components/DrumPads';
import { Display } from '../src/Components/Display';
import './styleSheets/Drumpmachine.css';
import { useEffect, useState } from 'react';
import { drumPads } from './keyCode/keyCode'

function App() {
  const [activeKey, setActiveKey] = useState('');

  useEffect(()=>{
    document.addEventListener('keydown', (event)=>{
      play(event.key.toUpperCase());
    })
  }, [])
  function play(id) {
    
    const audio = document.getElementById(id);
    audio.play();
    //document.getElementById('display').innerText = drumPads.name;
    setActiveKey(id);
  }

  return (
    <div className="App">  
      <div id='drum-machine'>
        <Display active={activeKey}/>
        <DrumPads clickHandler = {play}/>    
      </div>
    </div>
  );
}

export default App;
