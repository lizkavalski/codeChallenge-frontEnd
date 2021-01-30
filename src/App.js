// import logo from './logo.svg';
import './App.css';
import Header from './compontents/header';
import Footer from './compontents/footer';
import Challenge  from './compontents/challenge';
import Image from './assests/whiteboard.jpeg';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import { Fragment } from 'react';

const styles = theme => ({
  '@global': {
    body: {
      backgroundImage: `url(${Image})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      backgroundAttachment:'fixed',
      height: '100%',
    },
    html: {
      height: '100%',
    },
    '#componentWithId':{
      height: '100%',
    },
  },
});

function App() {
  return (
    <>
      <Fragment>
        <CssBaseline/>
        <Header/>
        <Challenge/>
        <Footer/>
      </Fragment>
    </>
  );
}

export default withStyles(styles)(App);
