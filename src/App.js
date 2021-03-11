import logo from './logo.svg';
import react,{useState,useEffect} from 'react';
import './App.css';
import fire from './fire';
import Login from './Login';
import Dashboard from './Dashboard';
import Connection from './Connection'

// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
//   }
// const rows = [];


function App() {
  const [user,setUser] = useState('');
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError,setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount,setHasAccount] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [rows,setRows]=useState([]);

  
 
  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }
  const handleLogin = (e) => {
    e.preventDefault();
    clearErrors();
      fire
        .auth()
        .signInWithEmailAndPassword(email,password)
        .catch(err=>{
          switch(err.code){
            case "auth/Invalid-email":
            case "auth/user-disabled":
            case "auth/user-not-found":
              setEmailError(err.message);
              break;
            case "auth/wrong-password":
              setPasswordError(err.message);
              break;
            
          }
        })
  }

  const handleSignUp = () => {
    clearErrors();
    fire
        .auth()
        .createUserWithEmailAndPassword(email,password)
        .catch(err=>{
          switch(err.code){
            case "auth/email-already-in-use":
            case "auth/invalid-email":
            case "auth/user-not-found":
              setEmailError(err.message);
              break;
            case "auth/weak-password":
              setPasswordError(err.message);
              break;
            
          }
        })
  }


  const handleLogout = () => {
    fire.auth().signOut();
  }

  const authListener = () => {
    fire.auth().onAuthStateChanged(user=>{
      if(user){
        // clearInputs()
        setUser(user);
      }else{
        setUser('');
      }
    })
  }
  useEffect(()=>{
    authListener();
  })


  //for Dashboard
  const saveUserInfo = (e) => {
    e.preventDefault();
    const Data={
      firstName:firstName,
      lastName:lastName,
      email:email,
      password:password
    }
    Connection.post('/userinfo.json',Data).then(response=>{
      getUserInfo();
    })
    handleSignUp();
}

const getUserInfo = () => {
  // e.preventDefault();
  Connection.get('/userinfo.json').then(response => {
    console.log("my get response",response.data);
    let data=[];
    for(let key in response.data)
    {
      data.unshift({
        ...response.data[key],
        userid:key
      })
    }
    setRows(data);
  })
}
 useEffect(()=>{getUserInfo()},[]);


 const handleDelete = (id) => {
   Connection.delete("/userinfo/" + id +".json").then(response => {
    getUserInfo();
     alert("Deleted Successfully!")
     
   })
 }

 const clearInputs = () => {
  setEmail('');
  setPassword('');
  setLastName('');
  setFirstName('')
  setConfirmPassword('')
}

  
  return (
    <div className="App" style={{backgroundColor:"#3f51b5"}}>
      {!user?(
      <Login 
        email={email} 
        setEmail={setEmail}
        password={password}
        setPassword={setPassword} 
        handleLogin={handleLogin}
        emailError={emailError} 
        passwordError={passwordError}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
      />):(<Dashboard
        email={email} 
        setEmail={setEmail}
        password={password}
        firstName={firstName}
        lastName={lastName}
        setFirstName={setFirstName}
        setLastName={setLastName}
        setPassword={setPassword} 
        getUserInfo={getUserInfo}
        saveUserInfo={saveUserInfo}
        handleLogout={handleLogout}
        rows={rows}
        handleDelete={handleDelete}
        clearInputs={clearInputs}
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
       />)}
    </div>
  );
}

export default App;
