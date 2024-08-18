import React, { createContext, useEffect, useState } from "react"

export const themeContext = createContext()

const ThemeProvider = ({ children }) => {
  const initialTheme = () => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      return savedTheme
    } else {
      return "light"
    }
  }

  const [theme, setTheme] = useState(initialTheme)

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"))
  }

  return <themeContext.Provider value={{ theme, toggleTheme }}>{children}</themeContext.Provider>
}

export default ThemeProvider
