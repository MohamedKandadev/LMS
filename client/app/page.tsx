import React, { FC, useState } from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import PopularCourses from './components/popularCourses';
import HowWork from './components/howWork';
import StartToday from './components/startToday';
import Footer from './components/footer';
import Pricing from './components/pricing';
import Proud from './components/proud';

interface Props {}

const Page: FC<Props> = ({

}) => {
  return (
    <>
      <Header />
      <Hero />
      <PopularCourses />
      <HowWork />
      <StartToday />
      <Pricing />
      <Proud />
      <Footer />
    </>
  )
}

export default Page