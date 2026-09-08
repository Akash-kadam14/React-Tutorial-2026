import React from 'react'
import LeftContent from './LeftContent';
import RightContent from './RightContent';
const Page1content = ({users} = props.users) => {
  console.log('page1',users)
  return (
    <div className= "flex gap-10 items-center h-[90vh] w-full py-10 px-18">
        <LeftContent />
        <RightContent users={users} />
    </div>
  )
}

export default Page1content