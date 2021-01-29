import React, {useState, useEffect, Props } from 'react';
// import Awswer from './answers';
import axios from 'axios';
import ReactCardFlip from 'react-card-flip';
import {Box, Button, Grid, CircularProgress, Card} from'@material-ui/core/';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  noteCard:{
    textAlign: 'center',
    backgroundImage:'url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fdepositphotos.com%2F5729537%2Fstock-photo-whiteboard-isolated-on-white-background.html&psig=AOvVaw1CrCBcMLnvyFLKtXUgqOAZ&ust=1611507021059000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOigkMzBsu4CFQAAAAAdAAAAABAa)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    boxShadow: '.5em .5em .3em #9c9c9c',
    paddingTop:'5em',
    paddingBottom:'2em',
    marginLeft:'5em',
    marginRight:'5em',
  },
  noteCardWriting:{
    textAlign: 'center', 
    fontSize:'3em',
    fontFamily:['Nanum Pen Script', 'cursive'],
  },
  buttonBox:{
    textAlign: 'center',
    paddingTop:'2em', 
    paddingBottom:'4em',
  },
  nButton:{
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    textAlign: 'center',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px #9c9c9c',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  images:{
    width:'15em',
  },
});

function Challenge(){
  const [challenge, setChallenge] = useState({
    title:'Click "next" button to get started',
    algorthism:['worng button'],
  });
  const styles= useStyles();
  const [isFlipped, setIsFlipped] = useState(false);
  const url = 'https://code-challenges-backend.herokuapp.com/random/challenge';
  // const url = 'http://localhost:3030/random/challenge';
  
  const fetchData = async () => { 
    const respone = await axios.get(url);
    setChallenge(respone.data);
  };
  const handleClick =()=>{
    setIsFlipped(!isFlipped);
  };
  const algListItem =()=>{
    let items = challenge.algorthism;
    return(
      <ul>
        {
          items.map((val, index) => {
            if(items.map === undefined){
              return( 'Click "next" button to get started');
            }
            return (
              <li key={index}>
                { val }
              </li>
            );
          })
        }
      </ul>
    );
  };

  return(
    <>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div className={styles.noteCard}>
          <Box className={styles.noteCardWriting}>
            <h1>{challenge.title}</h1>
            <p>{challenge.problem}</p>
            <img className={styles.images} src={challenge.visual}/>
            <button onClick={handleClick}>Flip Card</button>
          </Box>
        </div>
        <div>
          <Box className={styles.noteCardWriting}>
            <h1>{challenge.title}</h1>
            {algListItem()}
            {/* algorthism */}
            <img className={styles.images} src={challenge.pseudocode}/>
            <button onClick={handleClick}>Flip Card</button>
          </Box>
        </div>
      </ReactCardFlip>
      <Box className={styles.buttonBox}>
        <Button className={styles.nButton} onClick={fetchData}> Next</Button>
      </Box>
    </>
  );
}


export default Challenge;