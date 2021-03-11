import react from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';





const useStyles = makeStyles((theme) => ({
    // paper: {
    //   marginTop: theme.spacing(8),
    //   display: 'flex',
    //   flexDirection: 'column',
    //   alignItems: 'center',
    // },
    // avatar: {
    //   margin: theme.spacing(1),
    //   backgroundColor: theme.palette.secondary.main,
    // },
    // form: {
    //   width: '100%', // Fix IE 11 issue.
    //   marginTop: theme.spacing(1),
    // },
    // submit: {
    //   margin: theme.spacing(3, 0, 2),
    // },
    image: {
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));


const Login = (props) => {
    const { savePostData,email,setEmail,password,setPassword,handleLogin,handleSignUp,emailError,passwordError,hasAccount,setHasAccount } = props;
    
    
     const classes = useStyles();

  return (
  
  <Container  fixed >
  <Grid container component="main" className={classes.root}>
  <CssBaseline />
  <Grid item xs={false} sm={4} md={5} style={{backgroundColor:"#1976d2",marginTop:'80px'}}>
  {/* <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar> */}
          <Typography component="h1" style={{color:"white",marginTop:"10%"}} variant="h5">
            Welcome
          </Typography>
          <Typography component="h1" style={{color:"white"}} >
            Welcome to online center
          </Typography>

          <Typography component="h5" style={{color:"white"}} style={{color:"white",marginTop:"10%"}}>
            Secure an reliable for users
          </Typography>
          <Typography component="h5" style={{color:"white",padding:"2%"}} >
            Even your grandma can use it
          </Typography>
          <Typography component="h5" style={{color:"white",padding:"3%"}} >
            Works 15% faster than others
          </Typography>
  </Grid>
  <Grid item xs={12} sm={8} md={7} component={Paper} style={{marginTop:'80px'}} elevation={6} square>
    <div className={classes.paper}>
      
      <form 
        className={classes.form}  
        noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            value={email}
            onChange={e=>setEmail(e.target.value)}
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <p style={{color:"red"}}>{emailError}</p>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={password}
            onChange={e=>setPassword(e.target.value)}
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <p style={{color:"red"}}>{passwordError}</p>
          <Grid item>
              <Link href="#" variant="body2" style={{float: "right"}}>
                {"Forgot Password?"}
              </Link>
        </Grid>
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
           <Grid item>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleLogin}
            style={{float: "right",position: "absolute",right: "7%"}}
          >
            Login
          </Button>
          </Grid>
          <Grid container>
            <Grid item xs>
              {/* <Link href="#" variant="body2">
                Forgot password?
              </Link> */}
            </Grid>
            
          </Grid>
        </form>
    </div>
  </Grid>
</Grid>
</Container>
);
}


export default Login;