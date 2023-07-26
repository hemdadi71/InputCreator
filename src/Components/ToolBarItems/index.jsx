import React from 'react'
import ToolBarItem from './ToolBarItem'
// ........................................................
function ToolbarItems({ items }) {
  return (
    <>
      <div>
        {items.map(item => {
          if (item.text !== 'ComboBox') {
            return (
              <ToolBarItem key={item.text} text={item.text} type={item.type} />
            )
          }
        })}
      </div>
    </>
  )
}

export default ToolbarItems
