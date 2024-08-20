import React from "react"
import { Link, NavLink } from "react-router-dom"

const LinkButton = ({ name, href, data, onClick, className }) => {
  return (
    <NavLink
      to={{
        pathname: href
        // state: data
      }}
    >
      <button onClick={onClick} className={className}>
        {name}
      </button>
    </NavLink>
  )
}

export default LinkButton
