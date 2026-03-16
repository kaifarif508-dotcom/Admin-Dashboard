import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { RxCross2 } from "react-icons/rx";
import { useUser } from "../context/UserContext";

export default function Login({setLogin}) {
  const {isDark}= useTheme()
   const {setUser}= useUser()
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [ profile, setProfile] = useState("")

  const handleSubmit = (e) => {
    const data ={
      profile,
      username,
    }
    e.preventDefault();
    setUser(data)
    setLogin(false)
    
    
  
    
  };

  return (
    <div className={`fixed top-0 bottom-0 left-0 right-0 backdrop-blur-md  flex items-center justify-center z-100   ${isDark ? " text-white" : " text-black"}`} >
      <form style={styles.form} onSubmit={handleSubmit} className={` ${isDark ? " bg-[#1D1D29] text-white" : " bg-[white] text-black" }`}>
    
    <div className="w-full flex items-center justify-end">
        <RxCross2   onClick={()=>{
          
setLogin(false)

        }} className=" border-2 border-red-500 py-1 px-1 text-2xl text-right cursor-pointer rounded-full"/>
      </div>  
        <h2 className="text-center font-semibold text-3xl border-b-0-2 border-b-zinc-800 py-2">Login</h2>
        
            <input
            className={` ${isDark ? " bg-[#1D1D29] text-white" : " bg-[white] text-black"} `}
            id="profile"
            hidden
            name="profile"
          type="file"
          placeholder="Profile"
          
          onChange={(e) => {
  const file = e.target.files[0]
  if (file) {
    setProfile(URL.createObjectURL(file))
  }
}}
          style={styles.input}
          required
        />
        <label className="  text-md text-center" htmlFor="profile"  >upload Profile</label>

        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
          required
        />

        <input
          type="password"
         placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
          required
        />

        <button type="submit" style={styles.button} >
          Login
        </button>


      </form>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f5f5f5",
  },
  form: {
    border:"2px solid white",
    padding: "30px",
    borderRadius: "10px",
    width: "300px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
 
  button: {
    width: "100%",
    padding: "10px",
    background: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};