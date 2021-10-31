import { AppBar, Toolbar } from '@material-ui/core';
import React from 'react';

interface HeaderProps {
  components: JSX.Element[];
}

const Header = (props : HeaderProps) : JSX.Element => {
  return <AppBar position="sticky">
      <Toolbar>
        {...props.components}
      </Toolbar>
    </AppBar>
}

export default Header;