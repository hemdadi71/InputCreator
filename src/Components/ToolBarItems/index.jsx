import React from 'react'
import ToolBarItem from './ToolBarItem'
// ........................................................
function ToolbarItems({ items }) {
  return (
    <>
      <div>
        {items.map(item => {
          if (item.lable !== 'ComboBox') {
            return <ToolBarItem key={item.lable} item={item} />
          }
        })}
      </div>
    </>
  )
}

export default ToolbarItems
