import React, {useState} from 'react';
import styleChallenge from '../style/styleChallenge';
import axios from 'axios';
import ReactCardFlip from 'react-card-flip';
import {Box, CircularProgress, Container} from'@material-ui/core/';
import ImageFlip from '../assests/imageFlip.webp';
import Markers from '../assests/markersByMarkRabeOnUnsplash.jpg';

function Challenge(){
  const [challenge, setChallenge] = useState({
    title:'Click "next" button to get started',
    algorithm:['Click the "Flip Card Back" button', 'then click the blue butten that says "Next"', 'Begin praticing code challenges'],
    visual: Markers,
    pseudocode: Markers,
  });
  const [isFlipped, setIsFlipped] = useState(false);
  const [loading, setLoading]= useState(false);
  const styles= styleChallenge();
  const url = 'https://code-challenges-backend.herokuapp.com/random/challenge';
  //const url = 'http://localhost:3030/random/challenge';
  
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
    let items = challenge.algorithm;
    return(
      <ul className={styles.problemAndAlg}>
        Algorithm:
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
    <Container
      direction="column"
      justify="center" 
      alignItems="center"
    >
      <Box className={styles.noteCard}>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
          <div>
            {loading ? (
              <CircularProgress/>
            ):(
              <Box className={styles.noteCardWriting}>
                <h1 className={styles.cardTitle}>{challenge.title}</h1>
                <Box className={styles.cardConsents}>
                  <p className={styles.problemAndAlg}>{challenge.problem}</p>
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
    </Container>
  );
}


export default Challenge;