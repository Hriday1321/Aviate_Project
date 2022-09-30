import React from 'react'
import { Space, Wrap, DivT, DivL, Ref } from './Nav.elements'

import {dummy} from '../../utils/dummy'

function Nav(props) {
  return (
    <div>
      <Wrap>
        <Space />
      </Wrap>
      <Wrap>
        <DivT>Dashboard</DivT>
      </Wrap>
      <Wrap>
        <DivL>
          <Ref to='/' exact>Home</Ref>
        </DivL>
      </Wrap>
      <Wrap>
        <DivL>
          <Ref to='/'>Applications</Ref>
        </DivL>
        {dummy.map((data) => {
          return(
            <DivL>
              <Ref to='applications'>{data.name}</Ref>
            </DivL>
          )
        })}
      </Wrap>
    </div>
  )
}

export default Nav