import { getdoc } from '@/util/db'

import { UserButton } from '@clerk/nextjs'
import React from 'react'

const page = () => {

  return (
    <div>



      <p>hi</p>
      <UserButton showName></UserButton>




        <h1 className="text-2xl text-white"></h1>

    </div>
  )
}

export default page
