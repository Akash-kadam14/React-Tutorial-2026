import React from 'react'
import Nav from './Nav';
import Page1content from './Page1content';
const section1 = ({ users } = props.users) => {
  console.log('section',users)
  return (
    <div className="h-screen w-full">
      <Nav />
      <Page1content users={users} />
    </div>
  )
}

export default section1