import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CustomizedInputBase from './searcBar1'

export default function ButtonAppBar() {
  return (
    <Box sx={{position:"absolute", top:0 ,width: '100%'}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 0}}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            News
          </Typography>
          <Button color="inherit">Login</Button>
          <CustomizedInputBase/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}












