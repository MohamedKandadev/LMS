import Checkout from '@/app/components/Checkout'
import Header from '@/app/components/Header'
import HeaderPage from '@/app/components/HeaderPage'
import Footer from '@/app/components/footer'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <>
      <Header />
      <HeaderPage />
      <Checkout />
      <Footer />
    </>
  )
}

export default page