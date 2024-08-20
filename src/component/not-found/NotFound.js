import { Navigate } from "react-router-dom"

const NotFound = () => {
  setTimeout(() => {
    <Navigate to="/" />
  }, 3000)
  return (
    <div className="h-dvh text-4xl text-center font-extrabold text-regular_text">
      <h1>خطای 404 </h1>
      <p>صفحه مورد نظر یافت نشد</p>
    </div>
  )
}

export default NotFound
