import React,{useState,useEffect} from 'react'
import Loading from '../Loading/Loading';

const CourseExam = () => {
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
        Here is the exam, choose the chapters you want to make exam with
        </div>
)
}

export default CourseExam
