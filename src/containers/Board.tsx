import React, { useState, useEffect } from "react";
import createBoard from "../utils/createBoard";
import Cell from "../components/Cell";
import { revealed } from "../utils/reveal";
import TopBar from "../components/TopBar";
import Modal from "../components/modal";
import {useDispatch} from "react-redux";
// import startStopChannel from "../redux/reducers/channelReducer"
import {connect} from 'react-redux';

function Board(props : any) {
    const [board, setBoard] = useState([]);
    const [mineLocations, setMineLocations] = useState<any>([]);
    const [nonMinesCount, setNonMinesCount] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [restart, setRestart] = useState(false);
    const [newTime, setTime] = useState(0);
    const [boardLevel, setBoardLevel] = useState("Easy")
    const [flag, setFlag] = useState(10)
    const [removeMines, setRemoveMines] = useState([])
    const [flagLocation, setFlagLocation] = useState<any>([])

    useEffect(() => {
        const generateBoard = () => {
            //   const getBoard = createBoard(10, 15, 20, setMineLocations);
            const getBoard = boardLevel === "Easy" ? createBoard(8, 10, flag) : boardLevel === "Medium" ? createBoard(14, 18, flag) : createBoard(17, 21, flag);
            setNonMinesCount(100 - 20);
            setTime(0);
            setBoard(getBoard.board);
            setMineLocations(getBoard.mineLocation);
            setGameOver(false);
            setRestart(false);
        };
        generateBoard();
    }, [restart, setRestart, boardLevel]);

    useEffect(() => {
        // const getBoard = boardLevel === "Easy" ? createBoard(8, 10, flag) : boardLevel === "Medium" ? createBoard(14, 18, flag) : createBoard(24, 20, flag);
        // setBoard(getBoard.board);
        // setMineLocations(getBoard.mineLocation);
    }, [flag, setFlag]);

    const updateBoard = (x: any, y: any, e: any) => {
        let newBoardValues = JSON.parse(JSON.stringify(board));
        let newNonMinesCount = nonMinesCount;
        if (newBoardValues[x][y].value === "X") {
            for (let i = 0; i < mineLocations.length; i++) {
                if (
                    !newBoardValues[mineLocations[i][0]][mineLocations[i][1]].revealed
                ) {
                    // setInterval(() => {
                    // debugger
                    newBoardValues[mineLocations[i][0]][
                        mineLocations[i][1]
                    ].revealed = true;

                    // }, 200);
                    setBoard(newBoardValues);
                }
            }
            setGameOver(true);
        } else {
            // newBoardValues[x][y].revealed = true;
            newBoardValues = revealed(newBoardValues, x, y, newNonMinesCount);
            if (!newBoardValues) {
                return;
            }
            setBoard(newBoardValues.arr);
            setNonMinesCount(newBoardValues.newNonMinesCount);
        }
    };

    const flagCell = (x: any, y: any) => {
        let flaglocation: any = []
        let ff = true


        let newBoardValues = JSON.parse(JSON.stringify(board));
        newBoardValues[x][y].flagged = !newBoardValues[x][y].flagged;
        // remove mines value from mines location
        flagLocation.map((location: any, index: number) => {
            if (location[0] === x && location[1] === y) {

                ff = false
                flagLocation.splice(index, 1)
                let mine: any = removeMines.pop()
                let miness: any = mineLocations.push(mine)
                setMineLocations(miness)
                if(boardLevel === "Easy" ? flag < 10 : boardLevel === "Medium" ? flag < 40 : flag < 99 )
                setFlag(flag + 1)
            }
        })
        if (ff === true) {
            flaglocation.push(x, y)
            setFlagLocation([...flagLocation, flaglocation])
            let removemines: any = mineLocations.pop()
            setFlag(flag - 1)
            setRemoveMines(removemines)
        }
        // mineLocations.map((location,index) => {
        //     if(location[0] === x && location[1] === y){
        //         mineLocations.splice(index, 1)
        //     }
        // })

        setMineLocations(mineLocations)
        setBoard(newBoardValues);
    };
    return (
        <div
            style={{ boxShadow: "0 4px 3px rgba(0,0,0,0.3)", position: "relative", overflow: "hidden"}}
        >
            {gameOver && <Modal reset={setRestart} completeTime={newTime} />}
            <TopBar gameOver={gameOver} setTime={setTime} newTime={newTime} setBoardLevel={setBoardLevel} setFlag={setFlag} flag={flag} restart={restart} />
            {board.map((row, inde) => {
                let roww: any[] = row
                return (
                    <div style={{ display: "flex" }} key={inde}>
                        {roww.map((singleCell: any, index: number) => {
                            return (
                                <Cell
                                    key={index}
                                    data={singleCell}
                                    updateBoard={updateBoard}
                                    flagCell={flagCell}
                                    setFlag={setFlag}
                                    flag={flag}
                                    boardLevel={boardLevel}
                                />
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
}

export default Board;