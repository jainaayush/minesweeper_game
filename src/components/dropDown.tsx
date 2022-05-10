import React from 'react'

export default function dropDown({ levelUpdate ,level } : any) {
    const styles : any= {
        text : {
            fontSize : 20,
            fontWeight : "bold" ,
            textAlign: "left",
            marginBottom : "2px"
        },
    };
    
  return (
      <>
    <div style={{position:"absolute",top:"50px",left: level === "Easy" ? "20px" : level === "Medium" ? "80px" : "100px",backgroundColor : 'white',width:'120px',borderRadius:"8px"}}>
        <div style={styles.text} onClick={()=>{levelUpdate("Easy")}}>Easy</div>
        <div style={styles.text} onClick={()=>{levelUpdate("Medium")}}>Medium</div>
        <div style={styles.text} onClick={()=>{levelUpdate("Hard")}}>Hard</div>
    </div>
    </>
  )
}
