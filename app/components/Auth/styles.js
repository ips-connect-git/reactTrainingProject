import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';

const styles = () => ({
  checkRemember: {
    float: 'left',
    maxWidth: 180,
  },
  checkRememberContainer: {
    display: 'inline-flex',
    marginTop: -5,
  },
  boxBtn: {
    float: 'right',
  },
  boxContainer: {
    minWidth: 320,
    maxWidth: 400,
    height: 'auto',
    position: 'absolute',
    top: '20%',
    left: 0,
    right: 0,
    margin: 'auto',
  },
  boxWrapper: {
    margin: 10,
  },
  buttonsContainer: {
    marginTop: 50,
  },
  buttonsDiv: {
    textAlign: 'center',
    padding: 10,
  },
  errorMessage: {
    color: red[500],
    marginTop: 20,
    textAlign: 'center',
  },
  flatButton: {
    color: grey[500],
  },
  instructions: {
    textAlign: 'center',
    color: grey[500],
  },
  logoContainer: {
    textAlign: 'center',
    maxWidth: 360,
    height: 80,
    paddingTop: 20,
  },
  logoSmallContainer: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
  paper: {
    padding: 20,
    overflow: 'auto',
  },
  mobileContainer: {
    top: '15%',
  },
  mobileContainerRegister: {
    top: '10%',
  },
  title: {
    fontSize: 22,
    height: 60,
  },
});

export default styles;
