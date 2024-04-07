import React from 'react'
import RequestSitter from '../myComponents/RequestSitter'
import ApplyToSit from '../myComponents/ApplyToSit'
import Aboutus from './aboutus'
import Safety from './safety'
import ImgAndQuote from '../myComponents/ImgAndQuote'

export default function Body() {
  return (
    <div className="grid md:grid-cols-2 sm:grid-cols-1 justify-center bg-gray-200 h-screen">
      <div className="hidden md:block">
        <ImgAndQuote />
      </div>

      <div className="flex flex-col justify-center items-center lg:mt-0 sm:mt-20">
        <RequestSitter />
        <ApplyToSit />
      </div>

    </div>
  )
}
