import { useContext } from "react"
import { Outlet } from "react-router-dom"

import { ThemeContext } from "../../context/Theme"

import Header from "../Header/Header"
import Footer from "../Footer/Footer"

import {Wrapper} from "./SharedLayout.styled"


const SharedLayout = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <Wrapper theme={theme}>
            <Header />
            <Outlet />
            <Footer/>
        </Wrapper>
    )
}

export default SharedLayout