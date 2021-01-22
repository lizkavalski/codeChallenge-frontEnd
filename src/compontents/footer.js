import React from 'react';
import {Box, Grid} from'@material-ui/core/';
import { borders } from '@material-ui/system';
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles({
  footnote:{
    textAlign: 'center',
    fontSize:'1.5em',
    fontFamily:['Black Ops One','cursive'],
  },
  borderBox:{
    backgroundColor: 'pink',
    width: '100em',
    height: '5em',
    borderRadius:'4em',
  },
});

function Footer(){
  const styles= useStyles();
  return(
    <>
      <Grid
        container
        margin="0, auto"
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Box className = {styles.borderBox} >
          <h3 id='footnote' className={styles.footnote}>© 2021 </h3>
        </Box>
      </Grid>
    </>
  );
}

export default Footer;