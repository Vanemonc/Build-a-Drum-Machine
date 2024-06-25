import '../styleSheets/Display.css'
const names = {
    'Q': 'Heater 1',
    'W': 'Heater 2',
    'E': 'Heater 3',
    'A': 'Heater 4',
    'S': 'Clap',
    'D': 'Open-HH',
    'Z': 'Kick-n\'-Hat',
    'X': 'KICK',
    'C': 'Closed-HH',
}

export function Display({ active }) {
    return(
        <div id="display"> {names[active]}</div>
    );
}