import React from 'react'

function ToolBarItem({ text }) {
  return (
    <>
      <div className="p-3 border-b border-gray-300 text-[18px] cursor-pointer hover:text-white hover:bg-purple-400 transition-all duration-300">
        <p onClick={e => console.log(e.target.innerText)}>{text}</p>
      </div>
    </>
  )
}

export default ToolBarItem
