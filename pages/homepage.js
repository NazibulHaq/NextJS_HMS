import BottomNavigation from '../components/BottomNavigation';
import Button from '../components/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Homepage = () => {
  return ( 
    <div>
        <Grid item xs={8}>
      <Typography align = "center" component="h1" variant="h5">
          Welcome to Home Page<br/>
      </Typography>
      </Grid>

      <Button />
      <BottomNavigation />
    </div>
    
   );
}
 
export default Homepage;