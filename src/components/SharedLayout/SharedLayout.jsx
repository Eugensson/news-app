import { useContext } from "react"
import { Outlet } from "react-router-dom"

import { ThemeContext } from "../../context/Theme"

import Header from "../Header/Header"

import {MainContainer, Container } from "./SharedLayout.styled"


const SharedLayout = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <MainContainer theme={theme}>
            <Container>
                <Header />
                <Outlet />
            </Container>            
        </MainContainer>
    )
}

export default SharedLayout