import DesignerItems from '@/Components/DesignerItems'
import ToolbarItems from '@/Components/ToolBarItems'
import { GetInputs } from '@/api'
import { useState } from 'react'
import { useQuery } from 'react-query'
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
  const { data, isLoading, error } = useQuery('getInputs', GetInputs)
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
          <div className="p-5 h-[400px] overflow-auto border-b scrollBar-purple">
            <DesignerItems />
          </div>
          <div>
            {!isLoading &&
              data.Inputs.map(item => (
                <p
                  key={item._id}
                  dangerouslySetInnerHTML={{ __html: item.text }}></p>
              ))}
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
