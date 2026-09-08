import React from 'react'
import LeftContent from './LeftContent';
import RightContent from './RightContent';
const Page1content = () => {
  return (
    <div className= "flex gap-10 items-center h-[90vh] w-full py-10 px-18">
        <LeftContent />
        <RightContent />
    </div>
  )
}

export default Page1content