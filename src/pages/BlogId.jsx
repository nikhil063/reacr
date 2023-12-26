import { useParams } from "react-router-dom"

export default function BlogId() {
    const {id} = useParams()
    return(
    <>
    <text>id:{id}</text>
    </>
    )
}