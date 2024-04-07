import React from 'react'
import { PiPawPrintFill } from "react-icons/pi";

export default function RequestSitter() {
  return (
    <div className="border-2 rounded border-orange-500 bg-white outline-white w-96 h-80 flex flex-col justify-around text-center items-center mx-10 mb-10">
      Request a Sitter
      <PiPawPrintFill className='text-6xl'/>
      <div>
        <input type="text" className="outline rounded placeholder-gray-500 p-2" placeholder='zip code'></input><button className="outline ml-2 p-2 rounded">Submit</button>
      </div>
    </div>
  )
}
