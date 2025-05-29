import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import * as classes from './app.layout.styles';

interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = (props) => {
  const { children } = props;
  const navigate = useNavigate();

  const handleGoToList = () => {
    navigate('/characters'); // o linkRoutes.characterCollection si lo importas
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            color="inherit"
            aria-label="Menu"
            onClick={handleGoToList}
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>{children}</main>
    </>
  );
};
