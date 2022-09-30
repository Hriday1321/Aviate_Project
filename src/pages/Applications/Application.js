import React from 'react'
import { dummy } from '../../utils/dummy'
import CollectionB from '../../components/Application/CollectionB'

import { useLocation } from 'react-router-dom'

function Application() {
  const location = useLocation()

  return (
    <CollectionB {...dummy[location.state.index]} />
  )
}

export default Application