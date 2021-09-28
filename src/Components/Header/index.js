import React, {useState} from 'react';

import { Container, LeftSide, RightSide, Logo, PlayNow, HeaderCSSoldierSVG, Signature, Points, GoldPoint, SilverPoint, ProfileBar, ProfileAvatar ,ProfileInformations, PointsHover, ProfileInformationsContainer, ProfileInformationsName, ProfileLevelContainer, ProfileLevel, ProfileBadge, Menu, MenuBar, MenuSup, MenuInf } from './styles';

import Miniboxes from '../Miniboxes'
import Avatar from '../Avatar'
import Level from '../Level'

// SVGS
import Trophy from '../../img/Miniboxes/Trophy.svg'
import Star from '../../img/Miniboxes/Star.svg'
import Medal from '../../img/Miniboxes/Medal.svg'
import Search from '../../img/Miniboxes/Search.svg'
import Draft from '../../img/Miniboxes/Draft.png'
import Store from '../../img/Miniboxes/Store.svg'
import Notification from '../../img/Miniboxes/Notification.svg'
//


// Context
import { useUser } from '../../context/UserContext'

function Header() {

    const User = useUser()
    const [menuActivated, setMenuActivated] = useState(false)

    const HandleMenu = ()=>{
        menuActivated ? setMenuActivated(false) : setMenuActivated(true)
        console.log(menuActivated)
    }

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

            <Miniboxes description='CAMPEONATOS' svg={Trophy} svgzoom='18px' svgpositionY='16px' bbt={true}/>
            <Miniboxes description='RANKED' svg={Star} svgzoom='23px' svgpositionY='11px' bbt={true}/>
            <Miniboxes description='MISSÕES' svg={Medal} svgzoom='20px' svgpositionY='12px' bbt={true}/>
            <Miniboxes description='GAMES ACADEMY' svg='https://gamersclub.com.br/assets/images/icone-ga.png'svgzoom='15px' svgpositionY='12px' bbt={true}/>
            <Miniboxes description='NOTÍCIAS' svg={Draft} svgzoom='24px' svgpositionY='15px' bbt={true}/>
            <Miniboxes description='BUSCAR' svg={Search}svgzoom='16px' svgpositionY='14px' bbt={true}/>

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
            <Miniboxes description='LOJA' svg={Store}svgzoom='18px' svgpositionY='14px' bbt={true}/>

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
            
            <Miniboxes description='NOTIFICAÇÕES' svg={Notification}svgzoom='16px' svgpositionY='16px' bbt={true}/>

            <ProfileBar>
                <ProfileAvatar>
                    <Avatar id={User.id}/>
                </ProfileAvatar>
                <ProfileInformations>
                    <ProfileInformationsContainer>
                        <ProfileInformationsName>
                            <span>{User.name}</span>
                        </ProfileInformationsName>
                        <ProfileLevelContainer>
                            <ProfileLevel>
                                <Level value={20} />
                            </ProfileLevel>
                            <ProfileBadge />
                        </ProfileLevelContainer>
                    </ProfileInformationsContainer>
                </ProfileInformations>
            </ProfileBar>

            <Menu onClick={HandleMenu} bg={menuActivated}>
                <MenuSup>
                    <MenuBar  
                        bg={menuActivated ? 'transparent':'white'}
                        top={menuActivated ? '0':'5'}
                        rota={menuActivated ? '135deg':'0deg'}
                        rotb={menuActivated ? '225deg':'0deg'}/>
                </MenuSup>
                <MenuInf>
                    <span>MENU</span>
                </MenuInf>
            </Menu>

          </RightSide>
      </Container>
  );
}

export default Header;