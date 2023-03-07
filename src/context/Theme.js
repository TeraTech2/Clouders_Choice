import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const Theme = ({children}) => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

    const ToggleTheme = () => {
        setTheme(prev => {
            localStorage.setItem("theme", prev === "light" ? "dark" : "light");
            return prev === "light" ? "dark" : "light"
        });
    }

  return (
    <ThemeContext.Provider value={{theme, ToggleTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default Theme