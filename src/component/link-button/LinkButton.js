import React from "react"
import { Link } from "react-router-dom"

const LinkButton = ({ name, href, data }) => {
  return (
    <Link
      to={{
        pathname: href,
        state: data
      }}
    >
      <button className="bg-btn-green transition-all duration-150 hover:brightness-[0.8] text-black font-medium py-3 px-6 rounded">
        {name}
      </button>
    </Link>
  )
}

export default LinkButton
