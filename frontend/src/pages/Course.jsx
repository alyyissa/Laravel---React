import { useEffect, useState } from "react"
import Container from "../components/Container"
import Loading from "../components/Loading/Loading";

const Course = () => {
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setLoading(false)
        }, 500)
        return () => clearTimeout(timer);
    }, [])

    if (loading) return <Loading />
  return (
    <>
      <Container courseName="OOP"/>
    </>
  )
}

export default Course
