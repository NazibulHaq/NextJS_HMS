import * as React from 'react';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import ContactMailOutlinedIcon from '@material-ui/icons/ContactMailOutlined';
import QueueOutlinedIcon from '@material-ui/icons/QueueOutlined';
import ImageSearchOutlinedIcon from '@material-ui/icons/ImageSearchOutlined';


export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event= React.SyntheticEvent, newValue= string) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Search"
        value="search"
        icon={<ImageSearchOutlinedIcon />}
      />
      <BottomNavigationAction
        label="List"
        value="list"
        icon={<ListAltOutlinedIcon />}
      />
      <BottomNavigationAction
        label="Feedback"
        value="feedback"
        icon={<ContactMailOutlinedIcon />}
      />
      <BottomNavigationAction
        label="VisitPlan"
        value="visitplan"
        icon={<QueueOutlinedIcon />}
      />
    </BottomNavigation>
  );
}
