import { useState } from "react"


export default function Slots(slots) {

  const [mirror60, setMirror60] = useState(slots[1])
  const [mirror25, setMirror25] = useState(slots[2])
  const [mirror15, setMirror15] = useState(slots[3])

  
  return (
    <div className='w-full flex justify-center'>
      <div className="flex pt-5 w-2/3 justify-evenly">
        <div>
          <p className="text-center">60%</p>
          <div
            style={{ backgroundColor: mirror60 }}
            className={`w-20 md:w-32 h-20 md:h-32  border border-zinc-700 rounded-lg`}>
          </div>
        </div>
        <div>
          <p className="text-center">25%</p>
          <div
            style={{ backgroundColor: mirror25 }}
            className={`w-20 md:w-32 h-20 md:h-32  border border-zinc-700 rounded-lg`}>
          </div>
        </div> 
        <div>
          <p className="text-center">15%</p>
          <div
            style={{ backgroundColor: mirror15 }}
            className={`w-20 md:w-32 h-20 md:h-32  border border-zinc-700 rounded-lg`}>
          </div>
        </div> 
      </div>
    </div>
  )
}
