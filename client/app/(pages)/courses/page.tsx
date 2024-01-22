'use client'
import React from 'react'

import Header from '@/app/components/Header'
import CoursesUser from '@/app/components/coursesUser'
import Footer from '@/app/components/footer'
import HeaderPage from '@/app/components/HeaderPage'

type Props = {}

const Page = (props: Props) => {
  return (
    <>
      <Header />
      <HeaderPage />
      <CoursesUser />
      <Footer />
    </>
  )
}

export default Page