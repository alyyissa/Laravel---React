import React,{useState,useEffect} from 'react'
import Loading from '../Loading/Loading';

const CourseDescription = () => {
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setLoading(false)
        }, 500)
        return () => clearTimeout(timer);
    }, [])

    if (loading) return <Loading />
    return (
        <div>
        In this Course we will study the bla bla
        </div>
)
}

export default CourseDescription
