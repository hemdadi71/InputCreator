import ToolbarItems from '@/Components/ToolBarItems'
import { useState } from 'react'
const initialState = [
  {
    text: 'TextBox',
    type: 'text',
  },
  {
    text: 'CheckBox',
    type: 'checkBox',
  },
  {
    text: 'ComboBox',
  },
  {
    text: 'File Upload',
    type: 'file',
  },
  {
    text: 'Radio Button',
    type: 'radio',
  },
]
export default function Home() {
  const [items, setItems] = useState(initialState)
  return (
    <>
      <div className="flex h-[100vh]">
        <div className="w-[15%] border-r border-gray-200">
          <div className="bg-gray-400 py-2 text-lg px-4 font-semibold text-white">
            <p>Toolbar</p>
          </div>
          <ToolbarItems items={items} />
        </div>
        <div className="w-[60%] border-r border-gray-200">
          <div className="bg-gray-400 py-2 text-lg px-4 font-semibold text-white">
            <p>Designer</p>
          </div>
          <div className="grid grid-cols-2 p-5">
            <input type="text" />
            <input type="text" />
          </div>
        </div>
        <div className="w-[25%] border-r border-gray-200">
          <div className="bg-gray-400 py-2 text-lg px-4 font-semibold text-white">
            <p>Properties</p>
          </div>
        </div>
      </div>
    </>
  )
}
