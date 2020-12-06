import withAutoplay from 'react-awesome-slider/dist/autoplay';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
 

import TestimonyComponent from './testimony.component'
import './testimonies_slider.component.scss'




const TestimoniesSliderComponent = ()=> {
  return (
    <div className="testimonies_slider_container">

       <h2 className="testimonies_slider_container__title"> TESTIMONIALS </h2>

       <TSlider />

    </div>
  )
}


function TSlider() {
  return (
    <Carousel 
        showThumbs={false} 
        showArrows={false}
        showIndicators={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        dynamicHeight={true}>
        
        <TestimonyComponent
            name="Kinuthia"
            text="As a professional Security provider with a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services"
        />
        <TestimonyComponent
            name="John"
            text="As a professional Security provider with a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services"
        />
        <TestimonyComponent
            name="James"
            text="As a professional Security provider with a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services"
        />
        <TestimonyComponent
            name="Tom"
            text="As a professional Security provider with a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services"
        />

    </Carousel>
  )
}




export default TestimoniesSliderComponent