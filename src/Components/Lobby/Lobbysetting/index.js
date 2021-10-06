import React from 'react';

import { Container, Lobbyoptions, Searchinlobby, Selectfilters, Rangefilters, Contentseparator, Namefilter, Contentpart, Leftbutton, Radioscontainer, Radiobutton, Levelrange } from './styles';

// Context
import { useButton } from '../../../context/LobbyButtonsContext'

function Lobbysetting() {

    const Buttons = useButton()

    const HandlebuttonsStatusPrime = () => {
        Buttons.statusPrime ? Buttons.setStatusPrime(false) : Buttons.setStatusPrime(true)
    }

    const HandlebuttonsComVagas = () => {
        Buttons.comVagas ? Buttons.setComVagas(false) : Buttons.setComVagas(true)
    }

    const HandlebuttonsTimeFechado = () => {
        Buttons.timeFechado ? Buttons.setTimeFechado(false) : Buttons.setTimeFechado(true)
    }

    const HandlebuttonsModoTreino = () => {
        Buttons.modoTreino ? Buttons.setModoTreino(false) : Buttons.setModoTreino(true)
    }

    return (
        <Container>
        <Lobbyoptions>
            <Selectfilters>
                <Namefilter>
                    <span>MOSTRAR SALAS</span>
                </Namefilter>
                <Contentpart>
                    <Leftbutton marginright={'10px'} onClick={HandlebuttonsStatusPrime} selected={Buttons.statusPrime}>
                        <span>Status Prime</span>
                    </Leftbutton>
                    <Leftbutton marginright={'10px'} onClick={HandlebuttonsComVagas} selected={Buttons.comVagas}>
                        <span>Com Vagas</span>
                    </Leftbutton>
                    <Leftbutton marginright={'10px'} onClick={HandlebuttonsTimeFechado} selected={Buttons.timeFechado}>
                        <span>Time Fechado</span>
                    </Leftbutton>
                    <Leftbutton marginright={'10px'} onClick={HandlebuttonsModoTreino} selected={Buttons.modoTreino}>
                        <span>Modo Treino</span>
                    </Leftbutton>
                </Contentpart>
            </Selectfilters>
            <Contentseparator />
            <Rangefilters>
                <Namefilter>
                    <span>SKILL LEVEL</span>
                </Namefilter>
                <Contentpart>
                    <Radioscontainer>
                        <Radiobutton id='fslctS' type='radio' name='filterselect' checked/>
                        <label for='fslctS'>Salas</label>
                        <Radiobutton id='fslctJ' type='radio' name='filterselect' />
                        <label for='fslctJ'>Jogadores</label>
                        <Levelrange>
                            <span>10 - 20</span>
                        </Levelrange>
                    </Radioscontainer>
                </Contentpart>
            </Rangefilters>
        </Lobbyoptions>
        <Searchinlobby>

        </Searchinlobby>
    </Container>
    );
}

export default Lobbysetting;