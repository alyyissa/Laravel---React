import { useState,useEffect } from 'react';
import Hero from '../components/Home/Hero'
import Loading from '../components/Loading/Loading';
import Stats from '../components/Home/Stats';

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
    <div className='bg-primary' >
      <Hero />
      <Stats />
    </div>
  )
}

export default Home
