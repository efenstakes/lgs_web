import withAutoplay from 'react-awesome-slider/dist/autoplay';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { useHistory } from 'react-router-dom'
import {
  Button
} from '@material-ui/core'


import SlideItemComponent from './slide_item.component'

import './slide_item.component.scss'

import img1 from '../../assets/images/fence.jpg'
import img2 from '../../assets/images/drone.jpg'
import img3 from '../../assets/images/Transport.jpg'
import img4 from '../../assets/images/CCTV system.jpg'
import img5 from '../../assets/images/cctv camera.jpg'
import ButtonComponent from '../button/button.component';



const AutoplaySlider = withAutoplay(AwesomeSlider);
const Slides1 = ()=> {
  return (
    <AutoplaySlider
        play={true} 
        infinite={true} 
        bullets={false}
        cancelOnInteraction={false} 
        interval={6000}
        organicArrows={true}
        fillParent={false}
        style={{
          height: '84vh',
          maxHeight: '84vh',
          marginTop: '20px',
          borderRadius: '120px'
       }}
        > 

      <div data-src={img1} className="slide_item">
        <SlideItemComponent 
          title="Tiele 1"
          text="As a professional Security provider with a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services"
          cta="button here"
        />
      </div>

      <div data-src={img4} className="slide_item">
        <SlideItemComponent 
          title="Tiele"
          text="As a professional Security provider with a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services"
          cta="button here"
        />
      </div>
      
      <div data-src={img2} className="slide_item">
        <SlideItemComponent 
          title="Tiele 3"
          text="As a professional Security provider with a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services"
          cta="button here"
        />
      </div>
      
      <div data-src={img3} className="slide_item">
        <SlideItemComponent 
          title="Tiele 4"
          text="As a professional Security provider with a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services"
          cta="button here"
        />
      </div>



      {/* <div data-src={img2}>
        
        <div style={{
          position: 'absolute',
          left: '0px',
          bottom: '0px',
          right: '0px',
          color: 'white',
          backgroundColor: 'black',
        }}>
          <h2> Title </h2> 
          <p>
            As a professional Security provider with a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services
          </p> 
        </div>
      </div> */}
      {/* <div data-src={img3}>3</div>
      <div data-src={img1}>1</div>
      <div data-src={img4}>4</div>
      <div data-src={img5}>5</div> */}
    </AutoplaySlider>
  )
}

const SlidesComponent = ()=> {
    return (
        <Carousel 
            showThumbs={false} 
            showArrows={false}
            showStatus={false}
            infiniteLoop={true}
            autoPlay={true}
            dynamicHeight={true}>
            
            <div className="slide_item">
               
               <img src={img1} 
                    className="slide_item__image" />
               <SlideItemComponent 
                  title="LGS Security"
                  text="DILIGENTLY SECURING YOUR INTRESTS"
                  cta={ <Buttons /> }
                />
            </div>

            <div className="slide_item">
               
               <img src={img2} 
                    className="slide_item__image" />
               <SlideItemComponent 
                  title="LGS Security"
                  text="DILIGENTLY SECURING YOUR INTRESTS"
                  cta={ <Buttons /> }
                />
            </div>

            <div className="slide_item">
               
               <img src={img3} 
                    className="slide_item__image" />
               <SlideItemComponent 
                  title="LGS Security"
                  text="DILIGENTLY SECURING YOUR INTRESTS"
                  cta={ <Buttons /> }
                />
            </div>

            <div className="slide_item">
               
               <img src={img4} 
                    className="slide_item__image" />
               <SlideItemComponent 
                  title="LGS Security"
                  text="DILIGENTLY SECURING YOUR INTRESTS"
                  cta={ <Buttons /> }
                />
            </div>

            {/* <div>
                <img src={img3} />
                <p className="legend">Legend 3</p>
            </div> */}
        </Carousel>
    )
}

const Buttons = ()=> {
  const history = useHistory()

  const goToServices = ()=> history.push('/services')
  const goToWorkWithUs = ()=> history.push('/work-with-us')
  
  return (
    <>
      <div className="slides_button_one__container">
        <ButtonComponent title="our services" onClick={goToServices} />
      </div>
      <ButtonComponent title="work with us" onClick={goToWorkWithUs} />
    </>
  )
}

export default SlidesComponent