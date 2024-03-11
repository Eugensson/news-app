import { useContext } from "react"
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import { ThemeContext } from "../../context/Theme"

import { Wrapper, Input } from "./ThemeSwitcher.styled"

const ThemeSwitcher = () => {
    const { toggleTheme } = useContext(ThemeContext)
    
    return (
        <Wrapper>
            <LightModeIcon sx={{ fontSize: 21 }}/>
            <Input
                type="checkbox"
                name="checkbox"
                onChange={toggleTheme}
            />
            <DarkModeIcon sx={{ fontSize: 21 }} />
        </Wrapper>
    )
}

export default ThemeSwitcher