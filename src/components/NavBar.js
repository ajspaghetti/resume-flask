import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

function NavBar() {

  return (
    <Box sx={{flexGrow: 1}}>
    <AppBar position="static">
        <Toolbar>
            <IconButton href="/" edge="start" color="inherit" sx={{ mr: 2 }}>Home</IconButton>
            <IconButton href="/resume" edge="start" color="inherit" sx={{ mr: 2 }}>Resume</IconButton>
            <IconButton href="/aboutme" edge="start" color="inherit" sx={{ mr: 2 }}>About Me</IconButton>
            <IconButton href="/contact" edge="start" color="inherit" sx={{ mr: 2 }}>Contact</IconButton>
            <IconButton href="/blog" edge="start" color="inherit" sx={{ mr: 2 }}>Blog</IconButton>
        </Toolbar>
    </AppBar>
    </Box>
  );
}

export default NavBar;
