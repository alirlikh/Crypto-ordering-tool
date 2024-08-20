import React, { lazy, Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import NotFound from "./component/not-found/NotFound"

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

const Markets = React.lazy(() => import("./pages/markets/Markets"))
const Orders = React.lazy(() => import("./pages/orders/Orders"))

const routes = [
  { path: "/", element: <Markets /> },
  { path: "/orders/:currencyId", element: <Orders /> },
  { path: "*", element: <NotFound/> }
]

export default routes
