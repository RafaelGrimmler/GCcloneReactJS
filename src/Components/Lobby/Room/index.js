import React from 'react';

import { Container, Flag, Levelcircle, Levelcirclecontent, Leadercontainer, Primeicon, Playerscontainer, Player } from './styles';

// Context
import { useButton } from '../../../context/LobbyButtonsContext'

// Color palette
import LevelPalette from '../../../LevelPalette.json'

function Room({p1, p2, p3, p4, p5}) {

  const Buttons = useButton()

  const players = [p1, p2, p3, p4, p5]
  var prime = true
  var Lvaverage = 0
  var Qtplayers = 0

  for(let i = 0; i < players.length; i++){
    if(players[i]){
      Qtplayers++
      Lvaverage = Lvaverage + players[i].level
      if(players[i].prime === false && prime === true)
        prime = false
    }
  }
  Lvaverage = Math.round(Lvaverage/Qtplayers)

  return (
      <Container prime={prime} showprimerooms={Buttons.statusPrime ? prime : true}>
          <Flag/>
          <Levelcircle prime={prime}>
            <Levelcirclecontent prime={prime} bgc={LevelPalette[Lvaverage].backgroundColor}>
              <span>{Lvaverage}</span>
            </Levelcirclecontent>
            <Primeicon prime={prime}/>
          </Levelcircle>
          <Leadercontainer>
              <h2>Time: {p1.name}</h2>
          </Leadercontainer>
          <Playerscontainer>
            <Player>
              a
            </Player>
            <Player>
              a
            </Player>
            <Player>
              a
            </Player>
            <Player>
              a
            </Player>
            <Player br={true}>
              a
            </Player>
          </Playerscontainer>
      </Container>
  );
}

export default Room;