import React from 'react';

const PlayerCards = props => {
  return (
    <div class="ui link cards">
    {props.data.map(player => {
      return ( 
      <div class="card">  
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
