import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Image from 'next/image'
//import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
//import ModeCommentIcon from '@mui/icons-material/ModeComment';
//import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import ContactMailOutlinedIcon from '@material-ui/icons/ContactMailOutlined';
import QueueOutlinedIcon from '@material-ui/icons/QueueOutlined';
import ImageSearchOutlinedIcon from '@material-ui/icons/ImageSearchOutlined';
import Grid from '@mui/material/Grid';
//import Typography from '@mui/material/Typography';
//import Patientform from '/pages/patientform.js'
import Link from 'next/link'


export default function ButtonSizes() {
  return (
    <Box align = "center" sx={{ '& button': { m: 1 } }}>
      <div>
        <Button variant="contained" size="large" Link href="/patientform">
          Add Patient
        </Button>
        </div>
        <div>
        <Button variant="contained" size="large">
          Add Schedule
        </Button>
      </div>
        <div>
        <Button align="center"
        startIcon={<ImageSearchOutlinedIcon/>}
        variant="contained" size="large"></Button>
        <Button align="center"
        startIcon={<ListAltOutlinedIcon/>}
        variant="contained" size="large"></Button>
        <Button align="center"
        startIcon={<ContactMailOutlinedIcon/>}
        variant="contained" size="large"></Button>
        <Button align="center"
        startIcon={<QueueOutlinedIcon/>}
        variant="contained" size="large"></Button>
      </div>
      <Grid item xs={15}>
        <Link href="/patientform"><ImageSearchOutlinedIcon /></Link>
        </Grid>
        <Grid item xs={15}>
        <Link href="/login"><ContactMailOutlinedIcon /></Link>
      </Grid>
      
    </Box>
  );
}
