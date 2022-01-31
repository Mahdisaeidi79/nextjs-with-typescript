import { useState } from "react";

function UseState() {
 const [number,setNumber] = useState<number[]>([]);
 const [name, setName] = useState<string | null>(null)

  return (
    <div>
      <div>
        <button onClick={() => setNumber([...number, number.length + 1])}>
          Add to array
        </button>
        {JSON.stringify(number)}
      </div>
      <div>
        <button onClick={() => setName("jack")}>Set name</button>
        {JSON.stringify(name)}
      </div>
    </div>
  );
}

export default UseState;