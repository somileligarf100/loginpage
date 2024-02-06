import React,{ useState} from 'react';
import './App.css'
import axios from 'axios';

const App = () => {
  const [userRegistration, setUserRegistration] = useState({
    email: '',
    password: ''
  });
  //const [records, setRecords] = useState([]);
  const handle_Input = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    setUserRegistration({...userRegistration,[name]:value})
  }
  
  
const handle_submit= (event)=>{
  event.preventDefault();
  //const newRecord = {...userRegistration};
  //setRecords([...records, newRecord]);
  //console.log(records);
  setUserRegistration({email:'',password:''});
  axios.post('http://localhost:4002/api', {userRegistration})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error.response.data);
  });
   };


  return (
    <>
    <div className="login-container">
        <h2 >Login Page</h2>
        <form onSubmit={handle_submit} method='POST'>
            <div className="input-field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={userRegistration.email} onChange={handle_Input}  required></input>
        
            </div>
            <div className="input-field">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" value={userRegistration.password} onChange={handle_Input} required></input>
    
            </div>
            <div className="button-container">
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
    </>
  )
  }

export default App


