import React from 'react';
import {Box, Grid} from'@material-ui/core/';
import styleFooter from '../style/styleFooter';

function Footer(){
  const styles= styleFooter();
  return(
    <Grid
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Box className = {styles.borderBox} >
        <h3 id='footnote' className={styles.footnote}>© 2021 </h3>
        <h3 className={styles.footnote}>*All challenges are based on LeetCode problems*</h3>
      </Box>
    </Grid>
  );
}

export default Footer;