import * as React from 'react';
import Button from '@mui/material/Button';
import {
    Link
} from "react-router-dom";
export default function Home() {
    const styles: any = {
        paperContainer: {


            backgroundSize: "cover",
            zIndex: 4,
            height: "90%",
            maxWidth: "100%",
            marginTop: "20%",
            // margin: "0" "50px",
            /* background: url("https://www.google.com/logos/fnbx/minesweeper/lose_screen.png")
              0px 80px no-repeat; */
            backgroundRepeat: "no-repeat",

        },
        buttondiv: {
            justifyContent: 'center',
            alignItem: 'center',
            
        }
    };
    return (
        <>
            <div >


                <img src={require('../utils/lose_screen.png')} style={styles.paperContainer}>

                </img>
                <div >
                    <Link to="/minesweeper" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" disableElevation style={styles.buttondiv}>
                            Play

                        </Button>
                    </Link>
                </div>

            </div>
        </>
    );
}
