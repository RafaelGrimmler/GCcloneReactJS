import React from 'react';

import { Container, Flag, Levelcircle, Levelcirclecontent, Leadercontainer, Primeicon, Playerscontainer, Player } from './styles';

function Room({Prime}) {
  return (
      <Container prime={Prime}>
          <Flag/>
          <Levelcircle prime={Prime}>
            <Levelcirclecontent prime={Prime}>
              <span>15</span>
            </Levelcirclecontent>
            <Primeicon prime={Prime}/>
          </Levelcircle>
          <Leadercontainer>
              <h2>Time: {'RafaelRafaelRafaeldasd'}</h2>
          </Leadercontainer>
          <Playerscontainer>
            <Player></Player>

            <Player></Player>

            <Player></Player>

            <Player></Player>

            <Player br={true}></Player>
          </Playerscontainer>
      </Container>
  );
}

export default Room;