import React from "react"
import MyContext from "./MyContext"

const MyContextProvider = ({ children }) => {
    const sharedData = "shared val"
    return (
    <>
        <MyContext.Provider value={sharedData}>
            <p>Provided: {children}</p>
        </MyContext.Provider>
        <p>Default: {children}</p>
    </>
    )
}

export default MyContextProvider;