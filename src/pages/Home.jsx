import { useNavigate } from "react-router-dom"

export default function Home() {
    const navigation = useNavigate()
    const handleNavigate = (path) => {
        navigation(path)
    }
    return (
        <>
            <div style={{ margin: "12px 0" }}>
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
        </>
    )
}