import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Home() {
    const navigation = useNavigate()
    const handleNavigate = (path) => {
        navigation(path)
    }

    const [res, setRes] = useState('')

    const fetchData = async () => {
        try {
            const { data } = await axios.get('https://restcountries.com/v3.1/independent?status=true')
            setRes(data)
            console.log("hhh data", data, res)
        }
        catch (e) {
            console.log("hhh error", e)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>
            <div style={{ margin: "12px 0"}}>
                <text >Home</text>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "row" }}>
                <button onClick={() => { handleNavigate("/about") }}
                    style={{
                        marginRight: "12px",
                        padding: "4px 30px",
                        backgroundColor: "yellow",
                        textDecoration: "none",
                        fontFamily: "sans-serif",
                        fontWeight: "400",
                        borderRadius: "4px",
                        boxShadow: "initial"
                    }}>
                    About
                </button>
                <button onClick={() => { handleNavigate("/blog") }}
                    style={{
                        marginRight: "12px",
                        padding: "4px 30px",
                        backgroundColor: "yellow",
                        textDecoration: "none",
                        fontFamily: "sans-serif",
                        fontWeight: "400",
                        borderRadius: "4px",
                        boxShadow: "initial"
                    }}>
                    Blog
                </button>
                <button onClick={() => { handleNavigate("/faq") }}
                    style={{
                        marginRight: "12px",
                        padding: "4px 30px",
                        backgroundColor: "yellow",
                        textDecoration: "none",
                        fontFamily: "sans-serif",
                        fontWeight: "400",
                        borderRadius: "4px",
                        boxShadow: "initial"
                    }}>
                    Faq
                </button>
            </div>
            <div style={{display:"flex", flexDirection:"row", alignContent:"flex-start", backgroundColor:"orange", height:"1000px", width:"1000px"}}>
                {/* {res && res?.map((item, index) => {
                    return (
                        index < 10 ? (<div style={{margin:"5px",display:"flex", flexDirection:"row", alignItems:"center", backgroundColor:index%2===0? "yellow" : "red", flexGrow:1}}>
                                {item?.capital[0]}
                                <img src={item?.coatOfArms?.png} alt={"svg"} style={{width:"32px", height:"32px"}}/>
                        </div>) : ""
                    )
                })
                } */}
                
                <div style={{display:"flex", flexDirection:"column", alignContent:"flex-start", backgroundColor:"green", height:"100px", flexGrow:1}}>
                </div>
                <div style={{display:"flex", flexDirection:"column", alignContent:"flex-start", backgroundColor:"pink", height:"100px", flexGrow:3}}>
                </div>
            </div>
        </>
    )
}