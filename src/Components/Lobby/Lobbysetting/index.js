import React from 'react';

import { Container, Lobbyoptions, Searchinlobby, Selectfilters, Rangefilters, Contentseparator, Namefilter, Contentpart, Leftbutton, Radioscontainer, Radiobutton, Levelrange, Levelslidercontainer, Inputslider, Sliderbar, Sliderbg, Sliderpointer } from './styles';

// Context
import { useButton } from '../../../context/LobbyButtonsContext'
import { useSlider } from '../../../context/LobbySlidersContext'

function Lobbysetting() {

    const Buttons = useButton()
    const Sliders = useSlider()

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

    const handlesliderright = e => {
        Sliders.setSliderRight(Number(e.target.value))
       
        if(Number(e.target.value) <= Sliders.sliderLeft ){
            Sliders.setSliderRight(Sliders.sliderLeft + 1)
        }          
    }

    const handlesliderleft = e => {
        Sliders.setSliderLeft(Number(e.target.value))
       
        if(Number(e.target.value) >= Sliders.sliderRight ){
            Sliders.setSliderLeft(Sliders.sliderRight - 1)
        }    
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
                        <Radiobutton id='fslctS' type='radio' name='filterselect'  />
                        <label htmlFor='fslctS'>Salas</label>
                        <Radiobutton id='fslctJ' type='radio' name='filterselect' />
                        <label htmlFor='fslctJ'>Jogadores</label>
                        <Levelrange>
                            <span>{Sliders.sliderLeft} - {Sliders.sliderRight}</span>
                        </Levelrange>
                    </Radioscontainer>
                    <Levelslidercontainer>
                        <Inputslider type='range' min={0} max={20} step={1} value={Sliders.sliderLeft} onChange={handlesliderleft}/>
                        <Inputslider type='range' min={0} max={20} step={1} value={Sliders.sliderRight} onChange={handlesliderright}/>

                        <Sliderpointer left={Sliders.sliderLeft}/>
                        <Sliderpointer left={Sliders.sliderRight}/>
                        <Sliderbg />
                        <Sliderbar left={Sliders.sliderLeft} width={Sliders.sliderRight - Sliders.sliderLeft}/>
                    </Levelslidercontainer>
                </Contentpart>
            </Rangefilters>
        </Lobbyoptions>
        <Searchinlobby>

        </Searchinlobby>
    </Container>
    );
}

export default Lobbysetting;