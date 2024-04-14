import React, {useState} from 'react'
import Draggable from 'react-draggable'
import { BsFillTerminalFill } from "react-icons/bs"
import { MdClose } from "react-icons/md"
import { MdOutlineRectangle } from "react-icons/md"
import { MdMinimize } from "react-icons/md"


const Terminal = () => {
  const [isTerminalClose, setTerminalClose] = useState(false)
  const closeTermianl = () => {
    setTerminalClose(!isTerminalClose)
  }
  
  return (
    <div className='w-full h-full overflow-hidden relative '>
    <Draggable bounds="parent">
      <div className='h-full w-full md:w-2/3 md:h-2/3 lg:w-2/3 lg:h-2/3'>
        <div className="flex flex-col rounded-xl bg-gray-900 text-white font-mono h-full bg-opacity-40">
          
          <div className="flex items-center justify-between bg-gray-800 px-4 py-2">
            <div><BsFillTerminalFill /></div>
            <div className="text-sm">user</div>
            <div className="flex items-center gap-2">
              <div className='text-lg'><MdMinimize /></div>
              <div ><MdOutlineRectangle /></div>
              <div onClick={closeTermianl} ><MdClose /></div>
            </div>
            
          </div>
          <div className="flex items-center gap-8 bg-gray-800 px-4 py-2">
            <div>Files</div>
            <div>Clear</div>
            <div>Help</div>
          </div>

          <div className="flex-1 overflow-auto px-4 py-2">
            {/* terminal */}
          </div>

        </div>
        </div>
    </Draggable>
    </div>
  )
}

export default Terminal