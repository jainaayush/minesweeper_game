import React, { useEffect, useState } from "react";
import Timer from "./Timer";
import DropDown from "./dropDown"
import { ArrowDropDown } from '@mui/icons-material';
export default function TopBar({ gameOver, setTime, setBoardLevel, setFlag, flag, restart }: any) {
  const [dropShow, setDropShow] = useState(false)
  const [level, setLevel] = useState("Easy")
  const [levelChangeTimer, setLevelChangeTimer] = useState(false)
  useEffect(() => {
    setFlag(level === "Easy" ? 10 : level === "Medium" ? 40 : 99)
  }, [restart])
  const dropdownShow = () => {
    setDropShow(true)
  }
  const levelUpdate = (levels: string) => {
    setBoardLevel(levels)
    setLevel(levels)
    setFlag(levels === "Easy" ? 10 : levels === "Medium" ? 40 : 99)
    setDropShow(false)
    setLevelChangeTimer(levels === level ? false : true)
  }
  let iconstyle: any = {
    position: "absolute",
    top: 8,
    right: 0
  }
  return (
    <div
      style={{
        background: "#4a752c",
        padding: "10px 0",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >

      <div style={{ backgroundColor: "#fff", width: "100px", height: '40px', borderRadius: '5px', position:'relative' }} onClick={dropdownShow}>
      <ArrowDropDown style={iconstyle} />
        <p style={{ fontSize: 18, fontWeight: 'bold', marginTop: '10px' }}>{level}</p>

      </div>
      {
        dropShow &&
        <DropDown levelUpdate={levelUpdate} level={level} />
      }
      <span role="img" aria-label="flag" style={{ paddingBottom: 8 }}>
        🚩  <span style={{ color: '#fff', fontSize: 18 }}>{flag}</span>
      </span>
      <Timer gameOver={gameOver} sendTime={setTime} level={level} levelChangeTimer={levelChangeTimer} setLevelChangeTimer={setLevelChangeTimer} />
    </div>
  );
}
