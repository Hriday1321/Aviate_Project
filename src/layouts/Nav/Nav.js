import React from 'react'
import { Space, Wrap, DivT, DivL, Ref } from './Nav.elements'

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import {dummy} from '../../utils/dummy'

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function Nav(props) {
  const handleChange = (event, newValue) => {
    props.callBack(newValue);
  };

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
        <Tabs value={props.value} onChange={handleChange} variant="fullWidth">
        {dummy.map((data, index) => {
          return(
            <DivL>
              <Tab label={data.name} {...a11yProps({index})} />
            </DivL>
          )
        })}
        </Tabs>
      </Wrap>
    </div>
  )
}

export default Nav