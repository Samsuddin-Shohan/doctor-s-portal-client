import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';





const Service = (props) => {
    const {name,description,img}=props.service
    return (
        <Grid item xs={2} sm={4} md={4} >
             <Card sx={{ minWidth: 275 ,border:0,boxShadow:0}}>
             <CardMedia
        component="img"
        style={{width:'auto',margin:'0 auto'}}
        image={img}
        alt="Paella dish"
      />
      <CardContent>
        <Typography sx={{ fontSize: 19 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
       
       
        <Typography variant="body2"sx={{p:3,fontSize:16}}>
          {description}
        </Typography>
      </CardContent>
      
    </Card> 
       </Grid>
    );
};

export default Service;