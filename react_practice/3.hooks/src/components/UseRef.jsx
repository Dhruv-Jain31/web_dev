import { useEffect, useState, useRef } from "react";

export default function UseRef(){
    const [incomeTax, setIncomeTax] = useState(2000);
    const divRef = useRef();  // use ref is used to target a particular DOM element

    useEffect(function(){
        setTimeout(function(){
            console.log(divRef.current);
            divRef.current.innerHTML = 100000;
        }, 6000)
    }, [])


    return (
        <div>
            hi there, your tax returns are <div ref = {divRef}>{incomeTax}</div>
        </div>
        // div ref will target this particular div in the DOM
    )
}