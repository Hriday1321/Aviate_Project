import React from 'react'

import { dummy } from '../../utils/dummy'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Collection() {

  return (
    <div>
        {dummy.map((data) => {
            return (
                <Box sx={{ width: 275 }}>
                    <Card variant="outlined">
                    <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Application
                    </Typography>
                    <Typography variant="h5" component="div">
                    {data.name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                    </Typography>
                    <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Current Deadline: {data.cur_deadline.getDate()}/{data.cur_deadline.getMonth() + 1}/{data.cur_deadline.getFullYear()}</Button>
                </CardActions>    
                    </Card>
                </Box>
            )
        })}
    </div>
  )
}

export default Collection