
const RightCardContent = (props) => {
  return (
        <div className='absolute top-0 left-0 w-full h-full bg-black/50 flex flex-col justify-between p-6'>
          <h2 className='bg-white text-2xl font-semibold h-10 w-10 rounded-full flex items-center justify-center'>
           {props.id + 1}
          </h2>
          <p className='text-white text-sm mt-50'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque aspernatur obcaecati officiis officia possimus illo excepturi error ad consequatur iure.</p>
          <div className='flex justify-between'>
            <button className="bg-blue-500 text-white font-medium py-2 px-8 rounded-full"> {props.tag}</button>
            <button className="bg-blue-500 text-white font-medium py-2 px-3 rounded-full">
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
  )
}

export default RightCardContent