import React from 'react'

import Banner from '../components/Banner'
import Light from '../components/Light'

import Seller from '../components/Seller'
import Phone from '../components/Phone'
import Offers from '../components/Offers'

import Newarrivals from '../components/Newarrivals'


const Home = () => {
  return (
   <>

 <Banner/>
 <Light/>
 <Newarrivals/>

 <Seller/>
 <Phone/>
 <Offers/>
 
   </>
  )
}

export default Home