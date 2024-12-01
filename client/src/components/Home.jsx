import LandingHome from "./LandingHome";
import Nonummy from './Nonummy';
import PlantCare from './PlantCare';
import Testimonial from './Testimonial';
import Footer from './Footer';
import Feature from './Features';
function Home() {
    return(
        <div className="">
        <LandingHome />
         <Feature />
        <Nonummy />
         <PlantCare />
       <Testimonial />
         <Footer />   
      </div>
    );
}

export default Home;