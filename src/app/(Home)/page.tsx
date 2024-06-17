import { AboutCommon, HomeBanner } from "../Components"
import Ourwork from "./Ourwork"
import Product from "./Product"
import WhyChooseUs from "./WhyChooseUs"

function page() {
  return (
    <>
        <HomeBanner/>
        <AboutCommon showButton={true}/>
        <Product/>
        <Ourwork/>
        <WhyChooseUs/>
    </>
  )
}

export default page