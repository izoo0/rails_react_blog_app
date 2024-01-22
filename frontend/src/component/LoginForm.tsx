import { useState } from "react"
import { API_URL } from "../vite-env.d"

const LoginForm = ()=>{
     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')


           
            const userLogin = async ()=>{
               const userData = {email,password}
              const response = await fetch(`${API_URL}/login`,{
               method: 'POST',
               headers: {'Content-Type' : 'application/json'},
               body: JSON.stringify(userData)
              })
              if(response.ok){
               const json = await response.json()
               console.log(json)
              }else{
               console.log('invalid username or password')
              }
            }


 return(
     <>
     <form onSubmit={userLogin}>
       
       <label htmlFor="textEmail">Email</label> <br />
       <input 
       type="Email" 
       id="email" 
       value={email}
       onChange={(e)=>setEmail(e.target.value)} 
       />
        <br />
        <label htmlFor="textPassword">Password</label><br />
        <input
         type="password" 
         id="password"
         value={password}
         onChange={(e)=>setPassword(e.target.value)}
          />
          <br />
          <button type="submit">Login</button>
     </form>
     </>
 )

}


export default LoginForm