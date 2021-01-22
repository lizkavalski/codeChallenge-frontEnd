import React from 'react';
import {Box, Grid} from'@material-ui/core/';
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles({
  title:{
    textAlign: 'center',
    textShadow:'3px 5px 2px #9c9c9c',
    fontSize:'4em',
    paddingTop:0,
    fontFamily:['Black Ops One','cursive'],
  },
  subTitle:{
    textAlign: 'center',
    fontSize:'1.5em',
    fontFamily:['Indie Flower','cursive'],
  },
});

function Header(){
  const styles= useStyles();
  return(
    <>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Box>
          <h1 id='title'className={styles.title}>Code Challenge Review!</h1>
          <h3 id='sub-title' className={styles.subTitle}> Click the 'Next' button for a new challenge!</h3>
        </Box>
      </Grid>
    </>
  );
}

export default Header;