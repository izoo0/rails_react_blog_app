import { useState } from "react";
import { API_URL } from "../vite-env.d";

const RegistrationForm = ()=>{
     const [email,setEmail] = useState('')
     const [password,setPassword] = useState('')
     const [confirmation_password,setConfirmationpassword] = useState('')

     // const errors = useActionData();
    

     const CreatUser = async (e)=>{

          e.preventDefault()

          const postData = {email,password,confirmation_password}

           const response = await fetch(`${API_URL}/registration`,{
               method: "POST",
               headers: {'Content-Type':'application/json'},
               body: JSON.stringify(postData)
           }) 
           if (response.ok) {
               const json = await response.json()
               console.log(json)
           }else
           {
               console.log('errors')
           }
     }


  return(
     <>
      <form onSubmit={CreatUser}>
         <label htmlFor="textEmail">Email</label><br />
         <input 
         type="email" 
         name="email"
         id="email" 
         value={email} 
         onChange={(e)=>setEmail(e.target.value)} 
         />
         {/* {errors?.setEmail && <span>{errors.setEmail}</span>} */}
         <br />
         <label htmlFor="textPassword">Password</label><br />
         <input 
         type="password" 
         name="password"
         id="password" value={password} 
         onChange={(e)=>setPassword(e.target.value)} 
         />
           {/* {errors?.setPassword && <span>{errors.setPassword}</span>} */}
         <br />
         <label htmlFor="textConfirmationPassword">confirmation password</label> <br />
         <input 
         type="password" 
         id="confirmationPassword" 
         name="confirmationPassword"
         value={confirmation_password} 
         onChange={(e)=>setConfirmationpassword(e.target.value)} 
         />
         <br />
         <br />
           {/* {errors?.setConfirmationpassword && <span>{errors?.setConfirmationpassword}</span>} */}

           <button type="submit">Create Account </button>
     </form>

     </>
  )
}

export default RegistrationForm