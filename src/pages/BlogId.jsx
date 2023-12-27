import { useParams } from "react-router-dom"
import React from 'react';

export default function BlogId() {

const hoc =(InnerCom)=>{
    return function Hoc(props){
        return <InnerCom {...props} />
    }
}

const newCom =()=>{
    return <h1>inner HOC </h1>
}

const NewComponent = hoc(newCom)

    const {id} = useParams()
    return(
    <>
    <text>id:{id}</text>
    <div>
        <NewComponent />
    </div>
    </>
    )
}