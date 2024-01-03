import { createContext, useContext } from "react"

const MyContext = createContext("default val")

const ChildCom = () => {
    return (
        <GranddChildCom />
    )
}
const GranddChildCom = () => {
    const val = useContext(MyContext)
    return (
        <p>
            val: {val}
        </p>
    )
}
const ParentCom = () => {
    const passed = "passed val"
    return (
    <MyContext.Provider value={passed}>
      <ChildCom />
    </MyContext.Provider>  
)
} 

export default ParentCom