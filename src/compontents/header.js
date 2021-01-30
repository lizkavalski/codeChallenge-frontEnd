import React from 'react';
import {Box} from'@material-ui/core/';
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles({
  title:{
    textAlign: 'center',
    textShadow:'3px 5px 2px #9c9c9c',
    fontSize:'4em',
    fontFamily:['Black Ops One','cursive'],
  },
});

function Header(){
  const styles= useStyles();
  return(
    <>
      <Box>
        <h1 id='title'className={styles.title}>Code Challenge Review!</h1>
      </Box>
   
    </>
  );
}

export default Header;