import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import { AppBar, Toolbar, Button } from '@material-ui/core';

export const Navbar = withRouter(() => {
  const { isLoading, user, loginWithRedirect, logout, isAuthenticated } =
    useAuth0();
  const alignLeft = {
    justifySelf: 'flex-end',
    marginLeft: 'auto',
  };
  return (
    <AppBar position='static'>
      <Toolbar>
        <Button color='secondary' component={Link} to={'/'}>
          Bestipes
        </Button>
        {isAuthenticated && (
          <Button color='secondary' component={Link} to={'/recipe/new'}>
            New Recipe
          </Button>
        )}

        {!isLoading && !user && (
          <Button
            style={alignLeft}
            color='secondary'
            onClick={loginWithRedirect}
          >
            Sign In
          </Button>
        )}
        {!isLoading && user && (
          <Button
            style={alignLeft}
            color='secondary'
            onClick={() => logout({ returnTo: window.location.origin })}
          >
            Sign Out
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
});
