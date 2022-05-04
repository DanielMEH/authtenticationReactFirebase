import React,{useState, useEffect} from "react"
import {Logout} from "./components/Logout"
import {Home} from "./components/Home"
import {app} from "./credenciales"
import {getAuth, onAuthStateChanged} from "firebase/auth";
const auth = getAuth(app)
function App() {
  const [userGlobal, setuserGlobal] = useState(null)
  
  onAuthStateChanged(auth, (usuarioActivo)=>{
    if (usuarioActivo) {
       setuserGlobal(usuarioActivo)
      
    }else{
      setuserGlobal(null)
    }
  })



  return <> {userGlobal ? <Home />: <Logout />} </>
  
  
  }

export default App;
