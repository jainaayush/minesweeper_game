import React from "react";
import { mineColor } from "../utils/minesColor";
import Circle from "./circle";

// import breakSound from "../../public/mixkit-glass-break-with-hammer-thud-759.wav"
export default function Cell({ data, updateBoard, flagCell, setFlag, flag, boardLevel } : any) {
  let sound = new Audio(process.env.PUBLIC_URL+"mixkit-glass-break-with-hammer-thud-759.wav")
  let flagSound = new Audio(process.env.PUBLIC_URL+"wing-flap-1-6434.mp3")
  const style = {
    block: {
      width: boardLevel === "Hard" ? 35 : 40,
      height: boardLevel === "Hard" ? 35 : 40,
      color: numColorCode(data.value),
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontWeight: 800,
      fontSize: 30,
      cursor: "pointer",
      background: data.revealed
        ? data.value === "X"
          ? mineColor()
          : bombChexPattern(data.x, data.y)
        : chexPattern(data.x, data.y),
    },
  };

  const onClickUpdate = (e : Event) => {
    if (data.flagged) {
      return;
    }
    updateBoard(data.x, data.y);
    sound.play()
  };

  const onClickFlag = (e : Event) : void => {
    e.preventDefault();
    // setFlag(flag - 1)
    flagCell(data.x, data.y);
    flagSound.play()
  };

  return (
    <div
      style={style.block}
      onClick={(e : React.MouseEvent | any)=> onClickUpdate(e)}
      onContextMenu={(e : React.MouseEvent | any) => onClickFlag(e)}
    >
      {data.flagged && !data.revealed ? (
        "🚩"
      ) : data.revealed && data.value !== 0 ? (
        data.value === "X" ? (
          <Circle />
        ) : (
          data.value
        )
      ) : (
        ""
      )}
    </div>
  );
}

const chexPattern = (x : number, y : number) => {
  if (x % 2 === 0 && y % 2 === 0) {
    return "#aad751";
  } else if (x % 2 === 0 && y % 2 !== 0) {
    return "#a2d249";
  } else if (x % 2 !== 0 && y % 2 === 0) {
    return "#a2d249";
  } else {
    return "#aad751";
  }
};

const bombChexPattern = (x : number, y : number) => {
  if (x % 2 === 0 && y % 2 === 0) {
    return "#e5c29f";
  } else if (x % 2 === 0 && y % 2 !== 0) {
    return "#d7b899";
  } else if (x % 2 !== 0 && y % 2 === 0) {
    return "#d7b899";
  } else {
    return "#e5c29f";
  }
};

const numColorCode = (num : number) => {
  if (num === 1) {
    return "#1976d2";
  } else if (num === 2) {
    return "#388d3c";
  } else if (num === 3) {
    return "#d33030";
  } else if (num === 4) {
    return "#7c21a2";
  } else if (num === 5) {
    return "#1976d2";
  } else if (num === 6) {
    return "#1976d2";
  } else {
    return "white";
  }
};
