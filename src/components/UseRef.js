import { useRef} from "react";


const UseRef = () => {

const firstRef = useRef(0);

console.log("firstRef",firstRef.current);

const refFunc = () =>{
    //firsREf.current
}

    return(
        <div>
            <input onClick={refFunc} ref={firstRef} placeholder="ara"></input>
        </div>
    )
    }

export default UseRef;