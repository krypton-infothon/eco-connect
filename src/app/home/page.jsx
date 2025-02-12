import { getdoc } from '@/util/db'

import { UserButton } from '@clerk/nextjs'
import React from 'react'

const page = () => {

  return (
    <div>


      <p>hi</p>
      <UserButton showName></UserButton>



    </div>
  )
}

export default page
