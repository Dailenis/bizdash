import React from 'react'
import {Brand} from './Brand'
import {Container} from './Container'
import {GlobalStyle} from './GlobalStyle'

export function Dashboard(){
    return (
        <>  
            <GlobalStyle/>
                <Container >
                    <Brand/>
                    <p> Normal text </p>
                </Container>
        </>
    )
}