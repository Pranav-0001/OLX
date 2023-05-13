import React from 'react'
import Banner from "../Components/Banner/Banner";
import FootBanner from "../Components/FootBanner/FootBanner";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Posts from "../Components/Posts/Posts";
function Home() {
  return (
    <div>
      <Header />
      <Banner/>
      <Posts />
      <FootBanner/>
      <Footer />
    </div>
  )
}

export default Home
