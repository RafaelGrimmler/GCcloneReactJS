import React from 'react';

import { Container, Hidepart, Contentcontainer, Leftbackground, Rightbackground, Centralbackground, Contentcenter, Pagename } from './styles';

function Setgamebar() {
  return (
      <Container>

        <Hidepart />

        <Contentcontainer>
            <Leftbackground/>
            <Rightbackground/>

            <Centralbackground>
              <Contentcenter>

                <Pagename>
                  <h1>LOBBY</h1>
                </Pagename>

              </Contentcenter>
            </Centralbackground>
        </Contentcontainer>
      </Container>
  );
}

export default Setgamebar;