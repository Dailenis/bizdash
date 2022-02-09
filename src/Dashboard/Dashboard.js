import React, {useState, createContext} from 'react'
import {Brand} from './Brand'
import {Container} from './Container'
import {GlobalStyle} from './GlobalStyle'
import {Chart} from './Chart'
// import {VirtualizedTable} from './Table'
import {DarkSwitch} from './DarkSwitch'
export const ThemeContext = createContext();
export function Dashboard(){
    const ThemeState = useState('light');
    const [theme, setTheme] = ThemeState
    const dark = theme === 'dark'
    return (
               <ThemeContext.Provider value={ThemeState}>  
            <GlobalStyle dark={dark}/>
                <Container >
                    <Brand/>     
                    <DarkSwitch />               
                    <Chart />
                    {/* <VirtualizedTable /> */}
                </Container>
        </ThemeContext.Provider>
    )
}