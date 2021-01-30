import React, {useState} from 'react';
// import Awswer from './answers';
import axios from 'axios';
import ReactCardFlip from 'react-card-flip';
import {Box, CircularProgress} from'@material-ui/core/';
import {makeStyles} from '@material-ui/core/styles';
import ImageFlip from '../assests/imageFlip.webp';

const useStyles = makeStyles({
  noteCard:{
    background:'rgba(255,255,255,0.5)',
    boxShadow: '.5em .5em .3em #9c9c9c',
    paddingBottom:'3em',
    marginLeft:'5em',
    marginRight:'5em',
  },
  noteCardWriting:{
    fontSize:'3em',
    fontFamily:['Nanum Pen Script', 'cursive'],
    addingBottom:'1em',
    marginLeft:'2em',
    marginRight:'2em',
  },
  cardTitle:{
    textAlign: 'center', 
  },
  cardConsents:{
    display:'flex',
    flexDirection:'row',

  },
  buttonBox:{
    display:'flex',
    flexDirection:'column',
    alignItems:'flex-end',
    paddingTop:1, 
    paddingBottom:1,
    marginTop:20,
  },
  nButton:{
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    textAlign: 'center',
    fontFamily:['Nanum Pen Script', 'cursive'],
    fontSize:45,
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px #9c9c9c',
    color: 'white',
    height:50,
    width:360,
    marginTop:25,
  },
  flipButton:{
    background: 'linear-gradient(45deg, #FFD1F5  30%, #FA81DF 90%)',
    textAlign: 'center',
    fontFamily:['Nanum Pen Script', 'cursive'],
    fontSize:45,
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px #9c9c9c',
    height:50,
    width:360,
  },
  images:{
    width:'15em',
  },
  symbol:{
    width:35,
  
  },
});

function Challenge(){
  const [challenge, setChallenge] = useState({
    title:'Click "next" button to get started',
    algorthism:['Click the "Flip Card Back" button', 'then click the blue butten that says "Next"', 'Begin praticing code challenges'],
  });
  const [isFlipped, setIsFlipped] = useState(false);
  const [loading, setLoading]= useState(false);
  const styles= useStyles();
  // const url = 'https://code-challenges-backend.herokuapp.com/random/challenge';
  const url = 'http://localhost:3030/random/challenge';
  
  const fetchData = async () => { 
    setLoading(true);
    const respone = await axios.get(url);
    setChallenge(respone.data);
    setLoading(false);
  };
  const handleClick =()=>{
    setIsFlipped(!isFlipped);
  };
  const algListItem =()=>{
    let items = challenge.algorthism;
    return(
      <ul>
        Algorthism:
        {
          items.map((val, index) => {
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
      <Box className={styles.noteCard}>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
          <div>
            {loading ? (
              <CircularProgress variant="determinate" value={50} />
            ):(
              <Box className={styles.noteCardWriting}>
                <h1 className={styles.cardTitle}>{challenge.title}</h1>
                <Box className={styles.cardConsents}>
                  <p>{challenge.problem}</p>
                  <img className={styles.images} src={challenge.visual}/>
                </Box>
                <Box className={styles.buttonBox}>
                  <button onClick={handleClick} className={styles.flipButton}>Flip Card <img src={ImageFlip} className={styles.symbol}/></button>
                  <button className={styles.nButton} onClick={fetchData}> Next Challenge !</button>
                </Box>
              </Box>
            )}
          </div>
          <div>
            {loading ? (
              <CircularProgress variant="determinate" value={50} />
            ):(  
              <Box className={styles.noteCardWriting}>
                <h1 className={styles.cardTitle}>Title: {challenge.title}</h1>
                <Box className={styles.cardConsents}>
                  {algListItem()}
                  <img className={styles.images} src={challenge.pseudocode}/>
                </Box>
                <Box className={styles.buttonBox}>
                  <button onClick={handleClick} className={styles.flipButton}>Flip Card <img src={ImageFlip} className={styles.symbol}/></button>
                </Box>
              </Box>
            )}
          </div>
        </ReactCardFlip>
      </Box>
    </>
  );
}


export default Challenge;