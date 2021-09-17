import React from 'react';

import { Container, LeftSide, RightSide, Logo, PlayNow, HeaderCSSoldierSVG } from './styles';
import Miniboxes from '../Miniboxes'

// SVGS
import Trophy from '../../img/Miniboxes/Trophy.svg'
import Star from '../../img/Miniboxes/Star.svg'
import Medal from '../../img/Miniboxes/Medal.svg'
import Search from '../../img/Miniboxes/Search.svg'
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
            <Miniboxes description='NOTÍCIAS' svg='data:image/png;base64,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' svgzoom='24px' svgpositionY='15px'/>
            <Miniboxes description='BUSCAR' svg={Search}svgzoom='16px' svgpositionY='14px'/>

          </LeftSide>

          <RightSide>

          </RightSide>
      </Container>
  );
}

export default Header;