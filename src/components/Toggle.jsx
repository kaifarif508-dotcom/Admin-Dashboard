import React from "react";
import { useTheme } from "../context/ThemeContext";

function DarkLightSwitch() {
  // const [isDark, setIsDark] = useState(false);
  const {isDark, toggleTheme} = useTheme() 

 // const toggleMode = () => setIsDark(!isDark);

  return (
    <div
      style={{
        
       
        
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        transition: "all 0.3s ease",
      }}
    >
      

      {/* Toggle Switch */}
      <div
        onClick={toggleTheme}
        style={{
          width: "70px",
          height: "25px",
          backgroundColor: isDark ? "#4076FE" : "#ccc",
          borderRadius: "30px",
          position: "relative",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          padding: "5px",
          transition: "background-color 0.3s",
        }}
      >
        <div
          style={{
            width: "20px",
            height: "20px",
            backgroundColor: "white",
            borderRadius: "50%",
            transform: isDark ? "translateX(40px)" : "translateX(0)",
            transition: "transform 0.3s",
          }}
        ></div>
      </div>
    </div>
  );
}

export default DarkLightSwitch;