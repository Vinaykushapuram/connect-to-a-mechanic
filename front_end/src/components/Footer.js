import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';




const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '50vh',
  },
  main: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  }
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div >
      
      
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="h5">we help in making your journey smooth.</Typography>
          
        </Container>
      </footer>
    </div>
  );
}