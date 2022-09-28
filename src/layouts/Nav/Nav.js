import React from 'react'
import { Space, Wrap, DivT, DivL, Ref } from './Nav.elements'


function Nav() {

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
        <DivL>
          <Ref to='applications'>Applications</Ref>
        </DivL>
      </Wrap>
    </div>
  )
}

export default Nav