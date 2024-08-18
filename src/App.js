import "./App.css"
import { BrowserRouter as Router } from "react-router-dom"
import routes, { renderRoutes } from "./routes"
import ThemeProvider from "./context/ThemeContext"
import MainLayout from "./layout/MainLayout"

function App() {
  return (
    <ThemeProvider>
      <MainLayout>
        <Router>{renderRoutes(routes)}</Router>
      </MainLayout>
    </ThemeProvider>
  )
}

export default App
