import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Flag, Levelcircle, Levelcirclecontent, Leadercontainer, Primeicon, Playerscontainer, Player, Playerimgbox, Playerlevel, Roomaction, Rooomactionicon } from './styles';

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

  const handleplayercircle = P => {
    if( P )
      return (P.prime ? true : false)
    return P
  }

  const handleidforlinks = P => {
    if( P )
      return (P.id)
    return ''
  }

  return (
      <Container prime={prime} showprimerooms={Buttons.statusPrime ? prime : true} showvacancies={Buttons.comVagas ? (Qtplayers < 5 ? true : false) : true}>
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
              <Link style={{"cursor":"auto"}} to={`/${handleidforlinks(p1)}`}>
                <Playerimgbox prime={handleplayercircle(p1)} p={p1} title={p1 && p1.name}>
                  <div />
                </Playerimgbox>
              </Link>
              {p1 && <Playerlevel bgc={LevelPalette[p1.level].backgroundColor}>
                <span>{p1.level}</span>
              </Playerlevel>}
            </Player>
            <Player>
              <Link style={{"cursor":"auto"}} to={`/${handleidforlinks(p2)}`}>
                <Playerimgbox prime={handleplayercircle(p2)} p={p2} title={p2 && p2.name}>
                  <div />
                </Playerimgbox>
              </Link>
              {p2 && <Playerlevel bgc={LevelPalette[p2.level].backgroundColor}>
                <span>{p2.level}</span>
              </Playerlevel>}
            </Player>
            <Player>
              <Link style={{"cursor":"auto"}} to={`/${handleidforlinks(p3)}`}>
                <Playerimgbox prime={handleplayercircle(p3)} p={p3} title={p3 && p3.name}>
                  <div />
                </Playerimgbox>
              </Link>
              {p3 && <Playerlevel bgc={LevelPalette[p3.level].backgroundColor}>
                <span>{p3.level}</span>
              </Playerlevel>}
            </Player>
            <Player>
              <Link style={{"cursor":"auto"}} to={`/${handleidforlinks(p4)}`}>
                <Playerimgbox prime={handleplayercircle(p4)} p={p4} title={p4 && p4.name}>
                  <div />
                </Playerimgbox>
              </Link>
              {p4 && <Playerlevel bgc={LevelPalette[p4.level].backgroundColor}>
                <span>{p4.level}</span>
              </Playerlevel>}
            </Player>
            <Player br={true}>
              <Link style={{"cursor":"auto"}} to={`/${handleidforlinks(p5)}`}>
                <Playerimgbox prime={handleplayercircle(p5)} p={p5} title={p5 && p5.name}>
                  <div />
                </Playerimgbox>
              </Link>
              {p5 && <Playerlevel bgc={LevelPalette[p5.level].backgroundColor}>
                <span>{p5.level}</span>
              </Playerlevel>}
            </Player>
          </Playerscontainer>
          <Roomaction>
            <Rooomactionicon />
            <span>ENTRAR</span>
          </Roomaction>
      </Container>
  );
}

export default Room;