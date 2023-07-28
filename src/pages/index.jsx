import Table from '@/Components/Datagrid'
import EditableTable from '@/Components/Datagrid'
import DataGrid from '@/Components/Datagrid'
import DesignerItems from '@/Components/DesignerItems'
import ToolbarItems from '@/Components/ToolBarItems'
import { GetInputs } from '@/api'
import { useState } from 'react'
import { useQuery } from 'react-query'
const initialState = [
  {
    lable: 'TextBox',
    type: 'text',
  },
  {
    lable: 'CheckBox',
    type: 'checkBox',
  },
  {
    lable: 'File Upload',
    type: 'file',
  },
  {
    lable: 'Radio Button',
    type: 'radio',
  },
  {
    lable: 'Color Picker',
    type: 'color',
  },
  {
    lable: 'Range',
    type: 'range',
  },
  {
    lable: 'Date',
    type: 'date',
  },
  {
    lable: 'Submit',
    type: 'submit',
  },
  {
    lable: 'reset',
    type: 'reset',
  },
]
export default function Home() {
  const [items, setItems] = useState(initialState)
  const { data, isLoading, error } = useQuery('getInputs', GetInputs)
  return (
    <>
      <div className="flex h-[100vh] overflow-hidden">
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
          <div className="h-[170px] overflow-y-auto pb-10 p-3">
            {!isLoading &&
              data.Inputs.map(item => (
                <p
                  key={item._id}
                  className="border-b py-1"
                  dangerouslySetInnerHTML={{
                    __html: JSON.stringify(item),
                  }}></p>
              ))}
          </div>
        </div>
        <div className="w-[25%] border-r border-gray-200">
          <div className="bg-gray-400 py-2 text-lg px-4 font-semibold text-white">
            <p>Properties</p>
          </div>
          <Table />
        </div>
      </div>
    </>
  )
}
