'use client'
import React from 'react'
// import { useRouter } from 'next/router'

import Header from '@/app/components/Header'
import HeaderPage from '@/app/components/HeaderPage'
import Footer from '@/app/components/footer'
import SingleCourse from '@/app/components/single-course/single-course'

type Props = {}

function page({ params }: any) {
  return (
    <>
      <Header />
      <HeaderPage />
      <SingleCourse id={params.id} />
      <Footer />
    </>
  )
}

export default page