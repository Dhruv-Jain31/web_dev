import { useContext, useState } from "react"
import { CountContext } from "../context"

export default function Context_Counter(){
    const [counter, setCounter] = useState(0)

    // wrap anyone that wants to use the teleported value inside a .provider tag
    // CountRenderer and Buttons are declared inside the count so they are whole Count
    // is wrapped inside the CountContext.provider tag
    return (
        <div>
            <CountContext.Provider value={counter}>
                <Count setCounter={setCounter} />
            </CountContext.Provider>
        </div>
    )
}

function Count({setCounter}) {
    console.log("count is re rendering")
    return <div>
        <CountRenderer />
        <Buttons setCounter={setCounter} />
    </div>
}

function CountRenderer() {
    const counter = useContext(CountContext)

    return <div>
        {counter}
    </div>
}

function Buttons({setCounter}) {
    const count = useContext(CountContext);
    return <div>
        <button onClick={() => {
            setCounter(count + 1)
        }}>Increase</button>

        <button onClick={() => {
            setCounter(count - 1)
        }}>Decrease</button>
    </div>
}