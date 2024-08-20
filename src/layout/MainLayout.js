import React, { Suspense, useContext } from "react"
import { themeContext } from "../context/ThemeContext"
import { Sun } from "../assets/icon/Sun"
import { Moon } from "../assets/icon/Moon"
const MainLayout = ({ children }) => {
  const { theme, toggleTheme } = useContext(themeContext)
  return (
    <div className="">
      <header className=" h-20">
        <div className="relative left-0 top-0 ">
          <button className="absolute left-0 mx-10 my-5 border-none" onClick={toggleTheme}>
            {theme === "dark" ? <Sun /> : <Moon />}
          </button>
        </div>
      </header>
      <main>{children}</main>
      <footer className="w-full">
        <div className="bg-probe_chart_card w-full h-6 text-regular_text text-center mt-6 relative bottom-0">
          Made for Bitpin
        </div>
      </footer>
    </div>
  )
}
export default MainLayout
