import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu"
import SearchIcon from '@mui/icons-material/Search';

import Logo from "../Logo/Logo"
import MobileMenu from "../MobileMenu/MobileMenu";
import Searchbar from "../Searchbar/Searchbar";
import ThemeSwitcher from "../ThemeSwitcher.jsx/ThemeSwitcher";

import { Wrapper, Group, Btn, Navigation, TabletGroup, StyledLink } from "./Header.styled"

const Header = () => {
    const [query, setQuery] = useState("")
    const [isVisible, setIsVisible] = useState(false)

    const toggleMobileMenu = () => setIsVisible((prev) => (prev === false ? true : false))

    const handleFormSubmit = query => {
        setQuery(query);
    };

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
            <TabletGroup>
                <Searchbar onSubmit={handleFormSubmit} />
                <ThemeSwitcher/>
            </TabletGroup>            
        </Wrapper>
    )
}

export default Header