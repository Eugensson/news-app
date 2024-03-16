import { useState, useEffect, createContext } from "react"
import { PropTypes } from "prop-types"

export const ThemeContext = createContext()

const Theme = ({children}) => {
    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem("theme");
        return storedTheme ? JSON.parse(storedTheme) : "light";
    })

    const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"))

    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(theme))
    }, [theme])

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