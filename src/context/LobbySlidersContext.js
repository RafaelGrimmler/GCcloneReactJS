import React, { useContext, useState } from "react";

const LobbySlidersContext = React.createContext()

export function useSlider(){
    return useContext(LobbySlidersContext)
}

export function SliderProvider({ children }){

    const [sliderLeft, setSliderLeft] = useState(8)
    const [sliderRight, setSliderRight] = useState(16)

    return(
        <LobbySlidersContext.Provider
            value={{
                sliderLeft, 
                setSliderLeft,
                sliderRight, 
                setSliderRight
            }}
        >
            {children}
        </LobbySlidersContext.Provider>
    )

}