import React, {useState} from 'react';

import { Container, LeftSide, RightSide, Logo, PlayNow, HeaderCSSoldierSVG, Signature, Points, GoldPoint, SilverPoint, ProfileBar, ProfileAvatar ,ProfileInformations, PointsHover, ProfileInformationsContainer, ProfileInformationsName, ProfileLevelContainer, ProfileLevel, ProfileBadge, Menu, MenuBar, MenuSup, MenuInf, MoreBlock, MoreBlockSup, MoreBlockInf, MoreBlockLinks } from './styles';

import Miniboxes from '../Miniboxes'
import Avatar from '../Avatar'
import Level from '../Level'

// SVGS
import Trophy from '../../img/Miniboxes/Trophy.svg'
import Star from '../../img/Miniboxes/Star.svg'
import Medal from '../../img/Miniboxes/Medal.svg'
import Search from '../../img/Miniboxes/Search.svg'
import Store from '../../img/Miniboxes/Store.svg'
import Notification from '../../img/Miniboxes/Notification.svg'
//

// Context
import { useUser } from '../../context/UserContext'

function Header() {

    const User = useUser()
    const [menuActivated, setMenuActivated] = useState(false)
    const [menuMoreBar, setMenuMoreBar] = useState(false)
    const [screenW, setScreenW] = useState(window.innerWidth)

    const HandleMenu = ()=>{
        menuActivated ? setMenuActivated(false):setMenuActivated(true)
    }

    const HandleBoxesResponsive = ()=>{
        menuMoreBar ? setMenuMoreBar(false):setMenuMoreBar(true)
    }

    window.addEventListener('resize', e=>{
        setScreenW(e.target.innerWidth)
    })

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

            <Miniboxes description='CAMPEONATOS' svg={Trophy} svgzoom='18px' svgpositionY='16px' bbt={true} display={screenW < 1361 ? 'none':'block'}/>

            <Miniboxes description='RANKED' svg={Star} svgzoom='23px' svgpositionY='11px' bbt={true} display={screenW < 1450 ? 'none':'block'}/>

            <Miniboxes description='MISSÕES' svg={Medal} svgzoom='20px' svgpositionY='12px' bbt={true} display={screenW < 1540 ? 'none':'block'}/>

            <Miniboxes description='GAMES ACADEMY' svg='https://gamersclub.com.br/assets/images/icone-ga.png'svgzoom='15px' svgpositionY='12px' bbt={true} display={screenW < 1628 ? 'none':'block'}/>

            <Miniboxes description='BUSCAR' svg={Search}svgzoom='16px' svgpositionY='14px' bbt={true} display={screenW < 1628 ? 'none':'block'}/>

            <MoreBlock onClick={HandleBoxesResponsive}>
                <MoreBlockSup>
                    <span>...</span>
                </MoreBlockSup>
                <MoreBlockInf>
                    <span>MAIS</span>
                </MoreBlockInf>
                <MoreBlockLinks display={menuMoreBar ? 'block':'none'}>
                    <Miniboxes description='CAMPEONATOS' svg={Trophy} svgzoom='18px' svgpositionY='16px' bbt={true} display={screenW > 1361 ? 'none':'block'}/>
                    <Miniboxes description='RANKED' svg={Star} svgzoom='23px' svgpositionY='11px' bbt={true} display={screenW > 1450 ? 'none':'block'}/>
                    <Miniboxes description='MISSÕES' svg={Medal} svgzoom='20px' svgpositionY='12px' bbt={true} display={screenW > 1540 ? 'none':'block'}/>
                    <Miniboxes description='GAMES ACADEMY' svg='https://gamersclub.com.br/assets/images/icone-ga.png'svgzoom='15px' svgpositionY='12px' bbt={true} display={screenW > 1628 ? 'none':'block'}/>
                    <Miniboxes description='BUSCAR' svg={Search}svgzoom='16px' svgpositionY='14px' bbt={true} display={screenW > 1628 ? 'none':'block'}/>
                </MoreBlockLinks>
            </MoreBlock>

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
            <Miniboxes description='LOJA' svg={Store}svgzoom='18px' svgpositionY='14px' bbt={true} display={screenW < 1175 ? 'none':'block'}/>

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
            
            <Miniboxes description='NOTIFICAÇÕES' svg={Notification}svgzoom='16px' svgpositionY='16px' bbt={true} display={screenW < 1175 ? 'none':'block'}/>

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