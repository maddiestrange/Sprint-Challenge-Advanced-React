import React from 'react';
import { useColorChanger } from './hooks/useColorChanger';

const PlayerCards = props => {
    const [color, setColor] = useColorChanger('false');
    const toggleMode = e => {
      e.preventDefault();
      setColor(!color);
    };
  return (
    <div id='cards' class="ui cards">
    <button onClick={toggleMode} className={color ? 'toggle toggled' : 'toggle'}>
        Blue!</button>
    {props.data.map(player => {
      return ( 
      <div class="red card">  
      <div class="content"> 
      <div class="header">{player.name}</div>
      <div class="header">{player.country}</div>
      <div class="header">{player.searches}</div>
     </div>
      </div>
      )})}
    </div>
  );
};

export default PlayerCards;
