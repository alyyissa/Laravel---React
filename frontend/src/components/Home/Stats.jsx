import React from 'react'

const Stats = () => {
  return (
    <div className='bg-primary h-auto'>
        <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 h-full">
        <div className="grid grid-rows-3 gap-15 sm:grid-cols-3 sm:gap-0">
            <div className="text-center flex flex-col justify-center h-full">
                <h6 className="text-5xl font-bold text-coprimary">144K</h6>
                <p className="font-bold">Downloads</p>
            </div>
            <div className="text-center flex flex-col justify-center h-full">
                <h6 className="text-5xl font-bold text-coprimary">12.9K</h6>
                <p className="font-bold">Subscribers</p>
            </div>
            <div className="text-center flex flex-col justify-center h-full">
                <h6 className="text-5xl font-bold text-coprimary">27.3K</h6>
                <p className="font-bold">Users</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Stats
