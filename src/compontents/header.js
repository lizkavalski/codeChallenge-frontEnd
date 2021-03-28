import React from 'react';
import {Box, Container} from'@material-ui/core/';
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles({
  header:{
    textAlign:'center',
    fontFamily:['Black Ops One','cursive'],
  },
  title:{
    textShadow:'3px 5px 2px #9c9c9c',
    fontSize:60,
    margin:0,
    padding:0,
  },
  subTitle:{
    fontSize:25,
    margin:0,
    padding:0,
  },
});

function Header(){
  const styles= useStyles();
  return(
    <>
      <Container
        direction="column"
        justify="center" 
        alignItems="center"
      >
        <Box className={styles.header}>
          <h1 id='title'className={styles.title}>Code Challenge Flash Cards!</h1>
          <h6 className={styles.subTitle}> All 'answers' are plausible soluions to the code challenges</h6>
        </Box>
      </Container>
    </>
  );
}

export default Header;