import React from 'react'
import { T, Content, Deadline } from './Application.elements'

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

function CollectionB(props) {
  return (
    <div>
        <T>{props.name}</T>
        <Box sx={{ width: '100%' }}>
            <Stepper>
                {props.timeline.map((data, index) => {
                    return (
                        <Step {...{completed: 'true'}}>
                            <StepLabel>
                                {data.task} <br/>
                                Submitted: {data.sdate.getDate()}/{data.sdate.getMonth() + 1}/{data.sdate.getFullYear()}
                            </StepLabel>
                        </Step>
                    )
                })}
                <Step>
                    <StepLabel>{props.task}</StepLabel>
                </Step>
            </Stepper>
        </Box>
        <Content>Position: {props.position}</Content>
        <Content>Stipend: {props.moni} LPA</Content>
        <Deadline>Deadline: {props.cur_deadline.getDate()}/{props.cur_deadline.getMonth() + 1}/{props.cur_deadline.getFullYear()}</Deadline>
    </div>
  )
}

export default CollectionB