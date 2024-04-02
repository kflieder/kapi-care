import React from 'react'
import RequestSitter from '../components/RequestSitter'
import ApplyToSit from '../components/ApplyToSit'
import Aboutus from './aboutus'
import Safety from './safety'
import ImgAndQuote from '../components/ImgAndQuote'

export default function Body() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 justify-center">
      <div className="hidden md:block">
        <ImgAndQuote />
      </div>

      <div className="flex flex-col justify-center items-center bg-gray-200">
        <RequestSitter />
        <ApplyToSit />
      </div>

    </div>
  )
}
