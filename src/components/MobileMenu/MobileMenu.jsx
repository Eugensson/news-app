import { useContext } from "react"
import { PropTypes } from "prop-types"
import CloseIcon from "@mui/icons-material/Close"

import Logo from "../Logo/Logo"
import Navigation from "../Navigation/Navigation"
import ThemeSwitcher from "../ThemeSwitcher.jsx/ThemeSwitcher"

import { ThemeContext } from "../../context/Theme"

import { Wrapper, Group, Btn, ThemeWrapper } from "./MobileMenu.styled"


const MobileMenu = ({ toggleMobileMenu }) => {
    const { theme } = useContext(ThemeContext)

    return (
        <Wrapper theme={theme}>
            <Group>
                <Logo toggleMobileMenu={toggleMobileMenu}/>
                <Btn type="button" onClick={toggleMobileMenu}>
                    <CloseIcon sx={{ fontSize: 40 }}/>
                </Btn>
            </Group>
            <Navigation toggleMobileMenu={toggleMobileMenu} />
            <ThemeWrapper>
                <ThemeSwitcher />
            </ThemeWrapper>
        </Wrapper>
    )
}

MobileMenu.propTypes = {
    toggleMobileMenu: PropTypes.func.isRequired,
}

export default MobileMenu