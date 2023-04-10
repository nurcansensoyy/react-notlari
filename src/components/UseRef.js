import { useEffect, useRef, useState } from "react";


const UseEffect = () => {

const [status, setStatus]= useState("deneme");

const firstRef = useRef(0)

useEffect(()=>{
    setStatus("deneme2") //burada sayfa ilk çalıştığında status u deneme değil deneme2 olarak çalıştırmasını söyledik.
},[]);

console.log("firstRef",firstRef.current.value = 5)

const refFunc = () =>{
    //firsREf.current
}

    return(
        <div>
        <div>{status}</div>
            <input onClick={refFunc} ref={firstRef} placeholder="ara>"></input>
        </div>
    )
}

export default UseEffect;