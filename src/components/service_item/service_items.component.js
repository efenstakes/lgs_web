import React from 'react'
import { useHistory } from 'react-router-dom'

import img1 from '../../assets/images/Guards picture.jpg'
import img2 from '../../assets/images/cctv camera 2.jpg'
import img3 from '../../assets/images/Transit vehicle 2.jpg'
import img4 from '../../assets/images/Dog handler.jpg'
import img5 from '../../assets/images/VIP Guards.jpg'

import ServiceItemComponent from './service_item.component'

import './service_items.component.scss'
import ButtonComponent from '../button/button.component'
import SpacerComponent from '../spacer/spacer.component'



const ServiceItemsComponent = () => {
  const history = useHistory()

  const goToServices = ()=> history.push('/services')

  return (
    <div className="service_item_list">

      <ServiceItemComponent
         imageSrc={img5}
         title="Security Guards"
         text={
           <>
            <p className="service_item__content__text">
               Our Security Services are provided by well trained and committed security guards, ready to safeguard you, your staff, property and business letting you have peace of mind while experiencing our unrivalled security experience. All of our guards are supported by our mobile patrol and response unit and are supervised by our 24-hour Command and Control Centre.
            </p>
           </>
         } 
         extras={
           <>
            <h3 className="service_item__extras__title"> 
              Our guard’s services include: 
            </h3>
            <SpacerComponent space={5} />
            <ul className="service_item__extras__list">
               <li className="service_item__extras__list__item"> 
                 Cooperate and residential coverage 
               </li>
               <li className="service_item__extras__list__item"> 
                  VIP and Personal protection 
               </li>
               <li className="service_item__extras__list__item"> 
                  Events security 
               </li>
               <li className="service_item__extras__list__item"> 
                  And other customized services as demanded 
               </li>
            </ul>
           </>
         }
         cta={
            <ButtonComponent 
              title="Our Services"
              onClick={goToServices}
            />
         }
      />

      <SpacerComponent space={40} />
            
      <ServiceItemComponent
         imageSrc={img5}
         title="Electronic security solutions"
         text={
           <>
            <p className="service_item__content__text">
               We are well aware of the modern security challenges occasioned by advancement in technology. As a result, we develop and install highly effective systems to match the evolving security technological needs and threats. To achieve all this, we make use of current technology supported by our UK team to acquire and install state of art electronic security systems.  All our systems are installed and linked to security agencies for swift response.
            </p>
           </>
         } 
         extras={
           <>
            <h3 className="service_item__extras__title"> 
               We source, install and management: 
            </h3>
            <SpacerComponent space={5} />
            <ul className="service_item__extras__list">
               <li className="service_item__extras__list__item"> 
                 CCTV surveillance systems
               </li>
               <li className="service_item__extras__list__item"> 
                 Access control systems 
               </li>
               <li className="service_item__extras__list__item"> 
                 Biometric access systems
               </li>
               <li className="service_item__extras__list__item"> 
                 Alarm systems
               </li>
               <li className="service_item__extras__list__item"> 
                 Customized two-way communication systems
               </li>
               <li className="service_item__extras__list__item"> 
                 Drone surveillance services
               </li>
               <li className="service_item__extras__list__item"> 
                 Installation and maintenance of electric fences
               </li>
            </ul>
           </>
         }
         cta={
            <ButtonComponent 
              title="Our Services"
              onClick={goToServices}
            />
         }
         imgThenText={true}
      />

      <SpacerComponent space={40} />
      
      <ServiceItemComponent
         imageSrc={img2}
         title="Cash In Transit"
         text={
           <>
            <p className="service_item__content__text">
               Our expert cash and valuables in transit service provide secure transfer of valuables to all kinds of business throughout Kenya. 
            </p>
           </>
         } 
         cta={
            <ButtonComponent 
              title="Our Services"
              onClick={goToServices}
            />
         }
      />
      
      <SpacerComponent space={40} />
            
      <ServiceItemComponent
         imageSrc={img3}
         title="Dog handlers’ services"
         text={
           <>
            <p className="service_item__content__text">
               Our guards are backed by well-trained canine friends to fortify your security. We offer security dos and handlers services as well as dog training programs
            </p>
           </>
         } 
         cta={
            <ButtonComponent 
              title="Our Services"
              onClick={goToServices}
            />
         }
         imgThenText={true}
      />

      <SpacerComponent space={40} />
      
      <ServiceItemComponent
         imageSrc={img4}
         title="Other services"
         
         text={
           <>  </>
         } 
         extras={
           <>
            <h3 className="service_item__extras__title"> 
               We also offer the following specialized services
            </h3>
            <SpacerComponent space={5} />
            <ul className="service_item__extras__list">
               <li className="service_item__extras__list__item"> 
                 Private investigations
               </li>
               <li className="service_item__extras__list__item"> 
                 Private guards training
               </li>
               <li className="service_item__extras__list__item"> 
                 Cyber security 
               </li>
            </ul>
           </>
         }
         cta={
            <ButtonComponent 
              title="Our Services"
              onClick={goToServices}
            />
         }
      />
      
            
    </div>
  )
}

export default ServiceItemsComponent
