import React, { useEffect } from "react";
// import Confetti from 'react-confetti'

export default function Circle() {
  const styles = {
    maindiv: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    childdiv: {
      height: 23,
      width: 23,
      borderRadius: 20,
      background: "rgba(0,0,0,0.4)",
    }
  }
  return (
    // <Confetti>
    <div
      style={styles.maindiv}
    >

      <div
        style={styles.childdiv}
      ></div>

    </div>
    // </Confetti>
  );
}
