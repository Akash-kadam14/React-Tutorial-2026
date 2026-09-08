import React from 'react'
import RightCard from './RightCard';
const RightContent = ({users}= props.users) => {
  console.log('rightcontent',users)
  return (
    <div id="right-content" className=" h-full w-2/3 p-6 flex flex-nowrap gap-6 overflow-x-auto">
      {users.map((user, idx) => {
        return   <RightCard key={idx} id={idx} img = {user.img} tag={user.tag} />
      })}
    </div>
  )
}

export default RightContent