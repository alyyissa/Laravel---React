import { useState,useEffect } from 'react';
import Hero from '../components/Hero'
import Loading from '../components/Loading/Loading';

const Home = () => {
  const [loading, setLoading] = useState(true)
    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 500);

      return () => clearTimeout(timer);
    }, []);

    if (loading) return <Loading />;
  return (
    <div className='bg-white' >
      <Hero />
    </div>
  )
}

export default Home
