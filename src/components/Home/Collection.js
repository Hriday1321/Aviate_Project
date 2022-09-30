import React from 'react'

import { dummy } from '../../utils/dummy'
import { rec } from '../../utils/rec'
import { Grid, T, DivC, N, P, Task, Deadline } from './Home.elements'

function Collection() {
  return (
    <div>
    <T>Applied</T>
    <Grid>
        {dummy.map((data, index) => {
            return (
                <DivC>
                  <N>{data.name}</N>
                  <P>{data.position}: {data.moni} LPA</P>
                  <Task>{data.task}</Task>
                  <Deadline>Deadline: {data.cur_deadline.getDate()}/{data.cur_deadline.getMonth() + 1}/{data.cur_deadline.getFullYear()}</Deadline>
                </DivC>
            )
        })}
    </Grid>
    <T>Recommended Jobs</T>
    <Grid>
        {rec.map((data) => {
            return (
              <DivC>
                  <N>{data.name}</N>
                  <P>{data.position}: {data.moni} LPA</P>
                  <Task>This position was recommended to you because of your interest in similar jobs</Task>
                </DivC>
            )
        })}
    </Grid>
    </div>
  )
}

export default Collection