
import { AccordionCustom } from "../components/home/AccordionCustom"
import FooterF from "../components/Footer"
import BrandList from "../components/home/BrandList"
// eslint-disable-next-line no-unused-vars
import ContactUs from "../components/home/ContactUs"
import HeroSection from "../components/home/HeroSection"
import { StickyNavbar } from "../components/navbars/StickyNavbar"
import { useEffect } from "react"



const Home = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
},[]);
  return (
    <div>
    <StickyNavbar/>
     <HeroSection/>
     <div className="mt-[5rem] flex justify-center">
     <BrandList/>
     </div>
   <AccordionCustom/>
     {/* <ContactUs/> */}
     <FooterF/>
    </div>
  )
}

export default Home

