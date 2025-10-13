import React,{useState, useEffect} from 'react'
import Loading from '../Loading/Loading';

const CourseChapters = () => {
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
      <h1>Chapters</h1>
    </div>
  )
}

export default CourseChapters
