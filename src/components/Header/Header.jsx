import MenuIcon from "@mui/icons-material/Menu"
import SearchIcon from '@mui/icons-material/Search';

import { Wrapper, Group, Btn, Navigation, StyledLink } from "./Header.styled"
import Logo from "../Logo/Logo"
import { useState } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";
import ThemeSwitcher from "../ThemeSwitcher.jsx/ThemeSwitcher";

const Header = () => {
    const [isVisible, setIsVisible] = useState(false)

    const toggleMobileMenu = () => setIsVisible((prev) => (prev === false ? true : false))

    return (
        <Wrapper>
            <Logo />
            <Group>
                <Btn type="button">
                    <SearchIcon sx={{ fontSize: 20 }}/>
                </Btn>
                <Btn type="button" onClick={toggleMobileMenu}>
                    <MenuIcon sx={{ fontSize: 30 }}/>
                </Btn>
            </Group>
            {isVisible && <MobileMenu toggleMobileMenu={toggleMobileMenu} />}            
            <Navigation>
                <StyledLink to="/news-app/" end>Home</StyledLink>
                <StyledLink to="/news-app/favorite">Favorite</StyledLink>
                <StyledLink to="/news-app/read">Read</StyledLink>
            </Navigation>
            <ThemeSwitcher/>
        </Wrapper>
    )
}

export default Header