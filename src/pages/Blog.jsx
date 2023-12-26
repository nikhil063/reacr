import { useState } from "react"

export default function Blog() {

    const [count, setCount] = useState(0)

    const obj1 =[{
        "name":"john",
        "age":"22",
        "type":"17",
        "height":{
            "cm":[153, 111,222,333],
            "feet":"5'7"
        }
    },
{"hi":"hello"}
]

    const disp = ([{age, name, height:{cm:[f, s, t], feet}, type="A"}, {hi}]) => {
        return (
            <>
            <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
                
                    <p>{age}</p>
                    <p>{name}</p>
                    <p>{type}</p>
                    <p>{f}{s}{t}</p>
                    <p>{feet}</p>
                    <p>{hi}</p>
            </div>
            </>
        )
    }

    return (
        <>
            <div>
                <text>Destructure</text>
            </div>
            <div>
            {disp(obj1)}
            </div>
            <div>
                Counter
            </div>
            <div>
                <button onClick={()=>{count <= 0 ? setCount(0) : setCount(count-1)}}>-</button>
                <input type="number" max={10} value={count} onChange={(e)=>{setCount(e.target.value)}} />
                <button onClick={()=>{count >= 10 ? setCount(10) : setCount(count + 1 )}}>+</button>
            </div>
        </>
    )
}