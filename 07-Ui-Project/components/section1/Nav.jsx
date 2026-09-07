import react from 'react'

const Nav = () => {
  return (
    <nav className="flex flex-row justify-between items-center p-4">
    <button className="bg-black text-white px-4 py-2 rounded-full uppercase">Target Audience</button>
    <ul className="flex gap-4 text-black">
        <li>Digital</li>
        <li>Banking</li>
        <li>Platform</li>
    </ul>
    </nav>
  )
}

export default Nav;