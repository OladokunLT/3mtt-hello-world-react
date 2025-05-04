import React, { useState } from 'react';

const ClickCounter = () => {
    const [ count, setCount ] = useState(0)
    const [ message, setMessage ]= useState("")

    const decrement = () => {
        if (count > 0 ) {
            setCount(prev => prev - 1 );
            setMessage("");
        } else {
            setMessage("You've reached the limit!");
        }
    };

    const increment = () => {
        setCount(prev => prev + 1);
        setMessage("");
    };


    return (
        <main style={styles.container}>
         <h1> Click Counter App</h1>
         <h2> Count: {count} </h2>
         <section>
            <button onClick={decrement} style={styles.button}>Decrease</button>
            <button onClick={increment} style={styles.button}>Increase</button>
         </section>
         { message && <p style={styles.message}>{message}</p> }
        </main>
    )
}

const styles = {
    container: {
        textAlign: "center",
        marginTop: "50px",
        fontFamily: "Arial",
    },
    button: {
        padding: "10px 20px",
        margin: "10px",
        fontSize: "16px",
        cursor: "pointer",
    },
    message: {
        color: "red",
        fontWeight: "bold",
    }
};

export default ClickCounter;

