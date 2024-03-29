import {createGlobalStyle} from 'styled-components'

export const black = "#252020"
export const darkeGrey = "#353131"
export const darkGrey = "#515263"
export const midGrey= "#dad9d9"
export const lightGrey = "#f7f7f7"
export const brandColor = "#1DDA65"

export const GlobalStyle = createGlobalStyle`
body{
    h1{
      ${({dark}) => (dark && `color: ${brandColor};`)}  
    }
    color: ${darkGrey};
    background-color: ${({dark}) => dark ? black :  lightGrey};
    font-family: 'Blinker', sans-serif;
}
`