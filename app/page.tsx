'use client'

import About from "@/components/About"
import Clients from "@/components/Clients"
import Company from "@/components/Company"
import Confidence from "@/components/Confidence"
import ConnectionPage from "@/components/Connection"
import HomeCarousel from "@/components/HomeCarousel"
import Services from "@/components/Service"
import TransformationPage from "@/components/Transformation"
import VideoIntroduction from "@/components/VideoIntroduction"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
const page = () => {
  return (
    <div>
      <Header/>
      <HomeCarousel/>
      <Company/>
      <Services/>
      <About/>
      <Confidence/>
      <VideoIntroduction/>
      <Clients/>
      <ConnectionPage/>
      <TransformationPage/>
      <Footer/>
    </div>
  )
}

export default page