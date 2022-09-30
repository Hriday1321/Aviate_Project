import React from 'react'

import Collection from '../../components/Home/Collection'

function Home(props) {
  return (
    <div>
      <Collection callback={props.callback} value={props.value}/>
    </div>
  )
}

export default Home