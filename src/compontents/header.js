import React from 'react';
import styleHeader from '../style/styleHeader';
import {Box, Container} from'@material-ui/core/';

function Header(){
  const styles= styleHeader();
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