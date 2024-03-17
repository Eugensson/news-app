import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu"
import SearchIcon from '@mui/icons-material/Search';

import Logo from "../Logo/Logo"
import MobileMenu from "../MobileMenu/MobileMenu";
import Searchbar from "../Searchbar/Searchbar";
import ThemeSwitcher from "../ThemeSwitcher.jsx/ThemeSwitcher";

import { HeaderContainer, Group, Btn, Navigation, TabletGroup, StyledLink } from "./Header.styled"

const Header = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [isShowSearch, setIsShowSearch] = useState(false)

    const toggleMobileMenu = () => setIsVisible((prev) => (prev === false ? true : false))
    const toggleShowSearch = () => setIsShowSearch((prev) => (prev === false ? true : false))

    return (
        <HeaderContainer>
            <Logo />
            <Group>
                {isShowSearch && <Searchbar/>}
                <Btn type="button" onClick={toggleShowSearch}>
                    <SearchIcon sx={{ fontSize: 30 }}/>
                </Btn>
                <Btn type="button" onClick={toggleMobileMenu}>
                    <MenuIcon sx={{ fontSize: 40 }}/>
                </Btn>
            </Group>
            {isVisible && <MobileMenu toggleMobileMenu={toggleMobileMenu} />}            
            <Navigation>
                <StyledLink to="/news-app/" end>Home</StyledLink>
                <StyledLink to="/news-app/favorite">Favorite</StyledLink>
                <StyledLink to="/news-app/read">Read</StyledLink>
            </Navigation>
            <TabletGroup>
                <Searchbar/>
                <ThemeSwitcher/>
            </TabletGroup>            
        </HeaderContainer>
    )
}

export default Header