import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import ContactMailOutlinedIcon from '@material-ui/icons/ContactMailOutlined';
import QueueOutlinedIcon from '@material-ui/icons/QueueOutlined';
import ImageSearchOutlinedIcon from '@material-ui/icons/ImageSearchOutlined';
import {useState} from 'react';

export const MuiBottomNav = () => {
    const [value, setValue] = useState(0);
  
    return (
      <BottomNavigation
      sx={{ width: '100%', position: 'bottom', bottom: 0 }} 
      value={value} 
      onChange={(event, newValue) => {
        setValue(newValue)
      }}>
        <BottomNavigationAction label="Search" value="search" icon={<ImageSearchOutlinedIcon />} />
        <BottomNavigationAction label="List" value="lsit" icon={<ListAltOutlinedIcon />} />
        <BottomNavigationAction label="Feedback" value="feedback" icon={<ContactMailOutlinedIcon />} />
        <BottomNavigationAction label="VisitPlan" value="visitplan" icon={<QueueOutlinedIcon />} />
      </BottomNavigation>
    );
  }