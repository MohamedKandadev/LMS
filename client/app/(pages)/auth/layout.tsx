'use client'
import Header from '@/app/components/Header'
import Protected from '@/hooks/useProtect'
import React from 'react'

type Props = {
  children: any
}

const AuthLayout = ({children}: Props) => {
  return (
    <Protected isUserAuth={false}>
      <Header />
      {children}
    </Protected>
  )
}

export default AuthLayout