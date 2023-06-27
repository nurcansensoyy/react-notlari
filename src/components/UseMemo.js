import { useMemo, useState } from "react";


const UseMemo= () => {

    const [count, setCount] = useState(0);
    const [text, setTex] = useState("");

    const func = (num) => {
        console.log("hesaplanıyor...");
        for (let i = 0; i < 1000000000; i++){
            num +=1;
        }
        return num;
    }

    const memo = useMemo(()=>func(count), [count])

    return(
        <div>
            {memo}
            <input value={text} onChange={e => setTex(e.target.value)} placeholder="ara"></input>
        </div>
    )
    }

export default UseMemo;