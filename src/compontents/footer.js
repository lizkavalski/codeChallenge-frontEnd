import React from 'react';
import {Box, Grid} from'@material-ui/core/';
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles({
  borderBox:{
    textAlign: 'center',
    // fontSize:'1.5em',
    fontFamily:['Black Ops One','cursive'],
    marginTop:20,
    paddingBottom:20,
  },
  footnote:{
    margin:0,
    padding:0,
  },
});

function Footer(){
  const styles= useStyles();
  return(
    <>
      <Grid
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Box className = {styles.borderBox} >
          <h3 id='footnote' className={styles.footnote}>© 2021 </h3>
          <h3 className={styles.footnote}>*All challenges are based on Leet problems*</h3>
        </Box>
      </Grid>
    </>
  );
}

export default Footer;