import { useState } from "react"

const UseState= () => {
       const [count, setCount]= useState(0)// burada count 0 ile başlıyor diyoruz. setCount da count u güncelleyeceğimiz fonksiyondur. 
        // count a string veya obje de verebiliriz

    const clickFunc = () =>{
        setCount(count + 1)
      }
    return(
       <div>
        {count}
        <button onClick={clickFunc}>Tıkla</button>
       </div> 
    )
}

export default UseState;