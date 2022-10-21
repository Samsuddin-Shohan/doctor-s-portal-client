import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import fluoride from '../../../assets/images/fluoride.png'
import Service from '../Service/Service';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
const services = [
   {
    name:"cavity",
    description: "If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your proje ",
    img:cavity

   },
   {
    name:"FLuoride",
    description: "If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your proje ",
    img:fluoride

   },
   {
    name:"Whiening",
    description: "If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your proje ",
    img: whitening

   },
]

const Services = () => {
    return (
        <div>
            <h1>Our services</h1>
            <h2>Services we Provide</h2>
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
        {services.map((service, index) => (
                <Service key = {service.name} service={service}></Service>
        ))}
      </Grid>
    </Box>
        </div>
    );
};

export default Services;