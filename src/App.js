import './App.css';
import { Button, TextField } from '@mui/material';
import { useRef, useState } from 'react';
import axios from 'axios';

function App() {
  const [signIn, setSignIn] = useState(true);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const inputEmail = useRef(null);
  const handleLogin = () => {    
    axios.post("http://localhost:3000/user/signin", {
      password: senha,
      email: email
    })
      .then((response) => alert(response.data))      
  }
  const handleSignUp = () => {
    axios.post("http://localhost:3000/user", {
      password: senha,
      email: email,
      firstName: nome,
      lastName: sobrenome 
    })
      .then((response) => alert(response.data))
  }
  const handleChange = () => {   
    setNome("")     
    setEmail("")
    setSobrenome("")
    setSenha("")
    setSignIn(!signIn) 
  }
  return (
    <div className="App">
      {
        signIn ? (
          <>
            <li style={{ "list-style-type": "none" }}>
              <ul>
                <TextField value={email} ref={inputEmail} onChange={(e) => {setEmail(e.target.value)}} id="standard-basic" label="E-mail" variant="standard" />
              </ul>
              <ul>
                <TextField value={senha} type="password" onChange={(e) => {setSenha(e.target.value)}} id="standard-basic" label="Senha" variant="standard" />
              </ul>
            </li>
            <div>
              <Button onClick={() => handleLogin()} variant="contained">Login</Button>
              <Button onClick={() => handleChange()} variant="outlined">Sign Up</Button>
            </div>
          </>
        ) : (
          <>
            <li style={{ "list-style-type": "none" }}>
              <ul>
                <TextField value={nome} onChange={(e) => {setNome(e.target.value)}} id="standard-basic" label="Nome" variant="standard" />
              </ul>
              <ul>
                <TextField value={sobrenome} onChange={(e) => {setSobrenome(e.target.value)}} id="standard-basic" label="Sobrenome" variant="standard" />
              </ul>
              <ul>
                <TextField value={email} ref={inputEmail} onChange={(e) => {setEmail(e.target.value)}} id="standard-basic" label="E-mail" variant="standard" />
              </ul>
              <ul>
                <TextField value={senha} type="password" onChange={(e) => {setSenha(e.target.value)}} id="standard-basic" label="Senha" variant="standard" />
              </ul>
            </li>
            <div>
              <Button onClick={() => handleChange()} variant="contained">Login</Button>
              <Button onClick={() => handleSignUp()} variant="outlined">Sign Up</Button>
            </div>
          </>
        )
      }
    </div>
  );
}

export default App;
