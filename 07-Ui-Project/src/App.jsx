import React from 'react'
import Section1 from '../components/section1/section1'
// import Section2 from '.'
const users = [
  {
    img: 'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
    intro: '',
    tag: 'Satisfied',
  },
  {
    img: 'https://images.unsplash.com/photo-1600275669283-4bf2bb8a990c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro: '',
    tag: 'Underserved',
  },
  {
    img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro: '',
    tag: 'Underbanked',
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1661589915345-51d6f69f4b1c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro: '',
    tag: 'Underbanked',
  },
]
const App = () => {
  return (
    <div >
    <Section1 users = {users}/>
    {/* <Section2 /> */}
    </div>
  )
}

export default App