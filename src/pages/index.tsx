import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'
// import { HomeFeature, HomeHero, HomePopularCourse, HomeTestimonial, HomeOurMentors, DynamicHomeNewsLetter } from '@/components/home'
import About from "../components/ourvision/ourvision"
import MessageFromFounder from '@/components/message/message'
import ContactUs from '@/components/contactus/contactus'
import Ourwork from "../components/ourwork/ourwork"
import HomePublications from '@/components/publications/projects&publications'


const DynamicHomeHero = dynamic(() => import('../components/home/hero'))
const DynamicKnowledgepartners = dynamic(() => import('../components/knowledgepartners/knowledgepartners'))


const Home: NextPageWithLayout = () => {
  return (
    <>
      <DynamicHomeHero />
      <About />
      <MessageFromFounder />
      <DynamicKnowledgepartners />
      <Ourwork/>
      <HomePublications />
       <ContactUs />
       </>
  )
}

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Home
