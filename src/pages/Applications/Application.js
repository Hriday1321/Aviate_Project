import React from 'react'

import { useLocation } from 'react-router-dom'

function Application() {
  const location = useLocation()

  return (
    <div>{location.state.index}</div>
  )
}

export default Application