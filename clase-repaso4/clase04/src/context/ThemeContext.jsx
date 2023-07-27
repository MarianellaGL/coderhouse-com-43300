import { createContext, useContext, useState } from "react"

const initialState = {
    backGroundColor: "#FFF"
}

export const ThemeContext = createContext(initialState)

export const useTheme = () => useContext(ThemeContext)

const ThemeContextProvider = ({ children }) => {
    const [darkTheme, setDarkTheme] = useState(initialState);

    return <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
        {children}
    </ThemeContext.Provider>
}

export default ThemeContextProvider