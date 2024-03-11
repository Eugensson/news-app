import { createContext, useState } from "react"
import { PropTypes } from "prop-types"

export const ThemeContext = createContext()

const Theme = ({children}) => {
    const [theme, setTheme] = useState("light")

    const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"))
    
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

Theme.propTypes = {
    children: PropTypes.node,
}

export default Theme