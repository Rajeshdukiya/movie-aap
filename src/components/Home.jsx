import React from 'react'
import Sidenav from '../partials/Sidenav'

const Home = () => {
    document.title = "movi-app | Homepage"
  return (
    <>
   <Sidenav/>
   <div className='w-[80%] h-full bg-red-300'></div>
   </>
  )
}

export default Home