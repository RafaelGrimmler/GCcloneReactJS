import React from 'react';

import { Container, LeftSide, RightSide, Logo, PlayNow, HeaderCSSoldierSVG, Signature, Points, GoldPoint, SilverPoint, ProfileBar, ProfileAvatar ,ProfileInformations, PointsHover, ProfileInformationsContainer, ProfileInformationsName } from './styles';

import Miniboxes from '../Miniboxes'
import Avatar from '../Avatar';

// SVGS
import Trophy from '../../img/Miniboxes/Trophy.svg'
import Star from '../../img/Miniboxes/Star.svg'
import Medal from '../../img/Miniboxes/Medal.svg'
import Search from '../../img/Miniboxes/Search.svg'
import Draft from '../../img/Miniboxes/Draft.png'
import Store from '../../img/Miniboxes/Store.svg'
import Notification from '../../img/Miniboxes/Notification.svg'
//

function Header() {
  return (
      <Container>
          <LeftSide>

            <Logo>
                <a href="https://gamersclub.com.br/">
                    <div>
                        <div/>
                    </div>
                </a>
            </Logo>
            <PlayNow>
                <HeaderCSSoldierSVG />
                <span>JOGAR</span>
                <span>AGORA</span>
            </PlayNow>


            <Miniboxes description='CAMPEONATOS' svg={Trophy} svgzoom='18px' svgpositionY='16px'/>
            <Miniboxes description='RANKED' svg={Star} svgzoom='23px' svgpositionY='11px'/>
            <Miniboxes description='MISSÕES' svg={Medal} svgzoom='20px' svgpositionY='12px'/>
            <Miniboxes description='GAMES ACADEMY' svg='https://gamersclub.com.br/assets/images/icone-ga.png'svgzoom='15px' svgpositionY='12px'/>
            <Miniboxes description='NOTÍCIAS' svg={Draft} svgzoom='24px' svgpositionY='15px'/>
            <Miniboxes description='BUSCAR' svg={Search}svgzoom='16px' svgpositionY='14px'/>

          </LeftSide>



          <RightSide>
            <Signature>
                <a href="https://gamersclub.com.br/">
                    <div />
                    <div>
                        <span>ASSINATURAS</span>
                    </div>
                    <div />
                </a>
            </Signature>
            <Miniboxes description='LOJA' svg={Store}svgzoom='18px' svgpositionY='14px'/>

            <Points>
                <PointsHover />
                <GoldPoint>
                    <div />
                    <div>
                        <span>20</span>
                    </div>
                </GoldPoint>
                <SilverPoint>
                    <div />
                    <div>
                        <span>532</span>
                    </div>
                </SilverPoint>
            </Points>
            
            <Miniboxes description='NOTIFICAÇÕES' svg={Notification}svgzoom='18px' svgpositionY='14px'/>

            <ProfileBar>
                <ProfileAvatar>
                    <Avatar id='Rafael'/>
                </ProfileAvatar>
                <ProfileInformations>
                    <ProfileInformationsContainer>
                        <ProfileInformationsName>
                            <span>Rafael</span>
                        </ProfileInformationsName>
                    </ProfileInformationsContainer>
                </ProfileInformations>
            </ProfileBar>

          </RightSide>
      </Container>
  );
}

export default Header;