import styled from 'styled-components'
import {midGrey, darkeGrey} from './GlobalStyle'

export const Card = styled.div`
margin-top: 20px;
 padding: 20px;
 background-color: ${({dark}) => dark ? darkeGrey : 'white'};
 box-sizing: border-box;
 box-shadow: 0px 3px 5px ${({dark}) => dark ? 'black' : midGrey};
 ${({height}) => height && `height: ${height}px;`}

 @media (max-width: 1200px){
     padding: 10px
 }
`