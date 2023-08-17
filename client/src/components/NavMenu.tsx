import React, { useState } from 'react';
import {
  useTheme,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Grid,
  useMediaQuery,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

const NavMenu = ({ currentTab, setCurrentTab }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(
    `(min-width:${theme.breakpoints.values.xs}px) and (max-width:800px)`
  );
  const isSmall = useMediaQuery(
    `(min-width:801px) and (max-width:${theme.breakpoints.values.md}px)`
  );
  const isMedium = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isLarge = useMediaQuery(theme.breakpoints.up('lg'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const list = () => (
    <div
      role='presentation'
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Ingredients', 'Recipes', 'Cake Costs'].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return isMobile ? (
    <Grid
      item
      container
      xs={3}
      direction='row'
      justifyContent='flex-end'
      alignItems='center'
    >
      <IconButton
        disableRipple
        onClick={toggleDrawer(true)}
        sx={{ mr: '1.75rem' }}
      >
        <MenuIcon fontSize='large' />
      </IconButton>
      <Drawer anchor='right' open={drawerOpen} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </Grid>
  ) : (
    <Grid
      item
      container
      xs={isLarge ? 4 : isMedium ? 5 : isSmall ? 6 : 7}
      mr='2.75rem'
      direction='row'
      justifyContent='space-between'
      alignItems='center'
    >
      {['Ingredients', 'Recipes', 'Cake Costs'].map((text) => (
        <Grid item>
          <Typography
            onClick={() => {
              setCurrentTab(text);
              navigate(`/${text.toLowerCase().replace(' ', '-')}`);
            }}
            variant='h6'
          >
            {text}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default NavMenu;
