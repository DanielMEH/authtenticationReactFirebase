import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import {useState} from "react"
import {app} from "../credenciales"
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
signInWithRedirect,
GoogleAuthProvider

} from "firebase/auth";
const auth = getAuth(app)
const GoogleProvider = new GoogleAuthProvider();
export const Logout = () => {
  const [logout, setLogout] = useState(false)

  const handleSubmit = async(e)=>{
    e.preventDefault()
    const correo = e.target.email.value
    const password = e.target.password.value
    if (logout) {
     await createUserWithEmailAndPassword(auth,correo,password)
    }else{
     await signInWithEmailAndPassword(auth,correo,password)
    }
  }

  return (
      <>
   <div className="bg-white flex justify-between items-center">
      
      <div className="mx-5 my-3 block text-blue-800 text-2xl">Slawer</div>
      <div className="inline-flex items-center">
       {logout ? "Registrarse" :"Iniciar sesión"} 
      <FontAwesomeIcon className="mx-5 my-3 block text-xl text-gray-700 " icon={faUser} />

      </div>

    </div>
    <main className="container mx-auto my-12 sm:mt-44  ">
      <div className="w-11/12 sm:w-96 bg-white rounded rounded-3 mx-auto mt-4 flex flex-col">
        <form
        onSubmit={handleSubmit}
        className="flex flex-col ">
         <div  className="flex flex-col">
         <labe htmlFor="email" className="m-4 text-blue-800">Email</labe>
         <input type="email" placeholder="Ingrese su email" id="email"
         autocomplete="on" className="mx-4 border-b-2 outline-none focus:border-blue-800"/>
         </div>
         <div className="flex flex-col text-blue-800">
         <labe htmlFor="password" className="m-4">Password</labe>
         <input type="password" placeholder="********" id="password"
          className="mx-4 border-b-2 outline-none focus:boder-blue-800 focus:border-blue-800"/>
         </div>
         <div className="">
           <button type="submit" className="rounded rounded-2 block bg-blue-600 duration-200 hover:bg-blue-500 w-4/5 p-2 text-white mt-4 mx-auto text-center">
           {logout ? "Registrarse" :"Iniciar sesión"} 
             </button>
         </div>
         <div className="">
           <button type="submit" className="rounded rounded-2 hover:bg-[#dc2626] duration-200 block  w-4/5 p-2 bg-[#ef4444] text-white my-4 mx-auto text-center"
           onClick={()=>
            signInWithRedirect(auth, GoogleProvider)
           }>
             Iniciar  con Google</button>
         </div>

        </form>
         <div className="text-center mb-4">
         {logout ? "¿Ya tienes Cuenta?" :"¿No tienes cuenta?"} <button
         onClick={()=> setLogout(!logout)}
         className="text-blue-500">
           {logout ? "Inicia sesion":"Registrate"}
         </button>
         </div>
      </div>
    </main>
    </>

    
  )
}
