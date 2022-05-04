import React from 'react'
import {app} from "../credenciales"
import {getAuth, signOut} from "firebase/auth";
const auth = getAuth(app)

export const Home = () => {
  return (

    <>   
    <div className="bg-white w-96 absolute inset-0 m-auto h-32 text-center flex items-center justify-center flex-col ">
    <div>
    Bienvenido 
    </div>
    <div><button
    onClick={()=>
      signOut(auth)
    }
    className="bg-blue-700 text-white p-2 rounded m-1 block hover:bg-blue-600 duration-100"> Cerrar sesión</button></div>
    </div>
   
    
    </>
  )
   
}
