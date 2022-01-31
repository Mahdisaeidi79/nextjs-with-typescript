import {useEffect, useState} from "react";

function UseEffect() {
 const [number,setNumber] = useState<number>(0);

 useEffect(()=>{
     const timer = window.setInterval(()=>{
         setNumber((num:number)=>num+1);
     },1000);
     return ()=> window.clearInterval(timer)
 },[]);
  return (
    <div>
        <p>{number}</p>
    </div>
  );
}

export default UseEffect;