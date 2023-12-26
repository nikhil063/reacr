import { useRef, useState } from "react"

export default function Faq(){
    const [inputText, setInputText] = useState("")
    const inputRef = useRef()
    const handleSubmit =(e)=>{
        e.preventDefault()
        alert(`first: ${inputText}`)
        setInputText("")
    }
    const handleSubmit2 =(e)=>{
        e.preventDefault()
        alert(`two: ${inputRef?.current?.value}`)
        inputRef.current.value = '';
    }
    return(
        <>
        <div>
            <text>CONTROLLED</text>
        </div>
        <div>
            <form >
                <input type="text" value={inputText} onChange={(e)=>{setInputText(e?.target?.value)}} />
            <button onClick={(e)=>{handleSubmit(e)}}>Submit</button>
            </form>
        </div>
        <div>
            <text>UN-CONTROLLED</text>
        </div>
        <div>
            <form >
                <input type="text" ref={inputRef}  />
            <button onClick={(e)=>{handleSubmit2(e)}}>Submit</button>
            </form>
        </div>
        </>
    )
}