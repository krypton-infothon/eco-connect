import React from 'react'
import {SignInButton, SignUpButton, SignedOut} from '@clerk/nextjs'
const custSignIn = ({...Children}) => {
  return (
    <div className="border-s-green-500 rounded-xl mx-2 p-10">
        {...Children}
    </div>
  )
}

export default custSignIn