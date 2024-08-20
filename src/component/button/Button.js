import React from "react"

const Button = ({ children, onClick, loading = false, disabled = false }) => {
  return (
    <button
      loading={loading}
      disabled={disabled}
      onClick={onClick}
      className="bg-btn-green transition-all duration-150 hover:brightness-[0.8] text-black font-medium py-3 px-6 rounded w-24 outline-0 text-base"
    >
      {children}
    </button>
  )
}

export default Button
