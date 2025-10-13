import React,{useState,useEffect} from 'react'
import Loading from '../Loading/Loading';

const CourseComments = () => {
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
      Here is the reviews
    </div>
  )
}

export default CourseComments
