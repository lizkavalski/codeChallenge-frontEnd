import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  noteCard:{
    background:'rgba(255,255,255,0.5)',
    boxShadow: '.5em .5em .3em #9c9c9c',
    paddingBottom:3,
    minWidth:500,
    maxWidth:1500,
  },
  noteCardWriting:{
    fontSize:40,
    fontFamily:['Nanum Pen Script', 'cursive'],
    paddingBottom:25,
    marginLeft:30,
    marginRight:30,
    minWidth:300,
  },
  cardTitle:{
    textAlign: 'center',
    marginBottom:0,
    padding:0,
    
  },
  cardConsents:{
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'center',
    alignItems:'center',
  },
  problemAndAlg:{
    maxWidth:500,
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
    marginLeft:30,
    minWidth:350,
    maxWidth:600,
    minHeight:500,
    maxHeight:850,
  },
  symbol:{
    width:35,
  
  },
});

export default useStyles;