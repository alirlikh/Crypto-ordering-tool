import React, { Suspense } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

export const renderRoutes = (routes) => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Suspense>
  )
}

const routes = [
  { path: "/", element: <div>markets</div> },
  { path: "/order", element: <div>order</div> }
]

export default routes
