import React from 'react';

import { Container, Hidepart, Contentcontainer, Leftbackground, Rightbackground, Centralbackground, Contentcenter, Pagename, Akxcontainer, Lobbyoptionscontainer, Createlobbybutton, Joinlobbybutton, Rankedqualify, Currentgamescontainer, Gamesavailable, Gameslive, Gamesvetoing, Litemode, Litemodecheck, Litemodecheckcontainer, Litemodeinput } from './styles';

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
                <Akxcontainer />
                <Lobbyoptionscontainer>
                  <Createlobbybutton>
                    <div />
                    <span>CRIAR LOBBY</span>
                  </Createlobbybutton>
                  <Joinlobbybutton>
                    <div />
                    <span>ENTRAR EM UMA LOBBY</span>
                  </Joinlobbybutton>
                  <Rankedqualify>
                    <div />
                    <span>RANKED QUALIFY</span>
                  </Rankedqualify>
                </Lobbyoptionscontainer>
                <Currentgamescontainer>
                  <Gamesavailable>
                    <span>DISPONÍVEIS</span>
                    <span>5/10</span>
                  </Gamesavailable>
                  <Gameslive>
                    <span>LIVE</span>
                    <span>20</span>
                  </Gameslive>
                  <Gamesvetoing>
                    <span>VETANDO</span>
                    <span>2</span>
                  </Gamesvetoing>
                </Currentgamescontainer>
                <Litemode>
                  <span>Lite Mode</span>
                  <Litemodecheckcontainer>
                    <Litemodecheck />
                    <Litemodeinput type="checkbox"/>
                  </Litemodecheckcontainer>
                </Litemode>
              </Contentcenter>
            </Centralbackground>
        </Contentcontainer>
      </Container>
  );
}

export default Setgamebar;