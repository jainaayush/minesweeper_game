import React, { useState, useEffect } from "react";
let timeIntervalId;
export default function Timer({ gameOver, sendTime, level, levelChangeTimer, setLevelChangeTimer } : any) {
  let [time, setTime] = useState(0);
  let [sTime, setSTime] = useState(0);

  // useEffect(()=>{
  //   setTime(0)
  // },[levelChangeTimer])
  // useEffect(() => {
  //   if (time > 0 && (gameOver || levelChangeTimer)) {
      
  //     setSTime(time);
  //     setTime(0);
  //   }
  // }, [gameOver, time, level, levelChangeTimer]);

  useEffect(() => {
    // const incrementTime = () => {
    //   let newTime = time + 1;
    //   setTime(newTime);
    // };
   let timeIntervalId = setTimeout(() => {
      // incrementTime();
      setTime(time + 1)
    }, 1000);

    if (gameOver) {
      debugger
      //   let updatedTime = JSON.parse(JSON.stringify(time));
      setLevelChangeTimer(false)
      setTime(0);
      clearTimeout(timeIntervalId);
      
    }
  }, [time, setTime, gameOver ,levelChangeTimer , sendTime, ]);

  return (
    <div style={{ color: "white", fontSize: 20 }}>
      <span role="img" aria-label="clock" style={{ paddingRight: 10 }}>
        ⏰
      </span>
      {time}
    </div>
  );
}
