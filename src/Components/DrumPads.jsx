import { drumPads } from '../keyCode/keyCode'
import '../styleSheets/Drumpads.css'

export function DrumPads({ clickHandler }) {
  return (
    <div className='drum-pads'>
      {drumPads.map((val) => 
        <div className='drum-pad' id={val.number} onClick={()=> clickHandler(val.text)}>
        {val.text}
        <audio className='clip' id={val.text} src={val.src}></audio>
      </div>)}   
    </div>
  );
}