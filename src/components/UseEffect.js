import { useEffect, useState } from "react";

const UseEffect = () => {

const [status, setStatus]= useState("deneme");
useEffect(()=>{
    setStatus("deneme2") //burada sayfa ilk çalıştığında status u deneme değil deneme2 olarak çalıştırmasını söyledik.
},[])

    return(
        <div>{status}</div>
    )
}

export default UseEffect;