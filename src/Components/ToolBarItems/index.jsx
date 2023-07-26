import React from 'react'
import ToolBarItem from './ToolBarItem'
// ........................................................
function ToolbarItems({ items }) {
  return (
    <>
      <div>
        {items.map(item => {
          if (item.text !== 'ComboBox') {
            return <ToolBarItem key={item.text} text={item.text} />
          }
        })}
      </div>
    </>
  )
}

export default ToolbarItems
