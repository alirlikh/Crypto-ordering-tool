import React from "react"
import { Link, NavLink } from "react-router-dom"

const LinkButton = ({ name, href, data, onClick }) => {
  return (
    <NavLink
      to={{
        pathname: href
        // state: data
      }}
    >
      <button
        onClick={onClick}
        className="bg-btn-green transition-all duration-150 hover:brightness-[0.8] text-black font-medium py-3 px-6 rounded"
      >
        {name}
      </button>
    </NavLink>
  )
}

export default LinkButton
