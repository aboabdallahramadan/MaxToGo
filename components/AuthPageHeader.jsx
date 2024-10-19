import React from 'react'

const AuthPageHeader = ({name}) => {
  return (
    <h1 className='text-2xl text-primary text-center w-fit relative font-bold after:content-[" "] after:w-full after:h-[0.1rem] after:bg-foreground after:absolute after:bottom-[-0.5rem] after:left-0'>
        {name}
    </h1>
  )
}

export default AuthPageHeader