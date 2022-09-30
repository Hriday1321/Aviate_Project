import React from 'react'

import { dummy } from '../../utils/dummy'
import { Grid, T } from './Home.elements'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Collection() {
  return (
    <div>
    <T>Applied</T>
    <Grid>
        {dummy.map((data, index) => {
            return (
                <Box>
                    <Card>
                    <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {data.moni} LPA
                    </Typography>
                    <Typography variant="h5" component="div">
                    {data.name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {data.position}
                    </Typography>
                    <Typography variant="body2">
                    {data.task}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button value={index} size="small">Current Deadline: {data.cur_deadline.getDate()}/{data.cur_deadline.getMonth() + 1}/{data.cur_deadline.getFullYear()}</Button>
                </CardActions>    
                    </Card>
                </Box>
            )
        })}
    </Grid>
    </div>
  )
}

export default Collection