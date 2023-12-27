import { useContext } from "react"
import MyContext from "./MyContext"

const ChildComponent = () => {
    const sharedVal = useContext(MyContext)
    return (<text>{sharedVal}</text>)
}

export default ChildComponent