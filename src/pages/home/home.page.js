import React from 'react'


import './home.page.scss'

import SpacerComponent from '../../components/spacer/spacer.component'
import SlidesComponent from '../../components/slide_item/slides.component'
import AppBarComponent from '../../components/appbar/appbar.component'
import ServiceIconsComponent from '../../components/service_icons/service_icons.component'
import ServiceItemsComponent from '../../components/service_item/service_items.component'
import TestimoniesSliderComponent from '../../components/testimonies/testimonies_slider.component'
import WorkedWithComponent from '../../components/worked_with/worked_with.component'
import FooterComponent from '../../components/footer/footer.component'
import VServiceItemsComponent from '../../components/service_item/vservice_items.component'
import ContactUsHomeComponent from '../../components/contact_us_home/contact_us_home.component'


const HomePage = () => {
  return (
    <div>

      {/* app bar */}
      <AppBarComponent />
       
      {/* space */}
      <SpacerComponent space={0} />

      {/* slides */}
      <SlidesComponent />

      {/* space */}
      <SpacerComponent space={30} />

      {/* service icons */}
      <ServiceIconsComponent />

      {/* space */}
      <SpacerComponent space={30} />

      {/* services  */}
      <ServiceItemsComponent />

      {/* space */}
      <SpacerComponent space={40} />

      <VServiceItemsComponent />

      {/* space */}
      <SpacerComponent space={30} />

      {/** testimony */}
      <TestimoniesSliderComponent />

      {/* space */}
      <SpacerComponent space={30} />

      {/* worked with */}
      <WorkedWithComponent />

      {/* space */}
      <SpacerComponent space={30} />

      {/* contact us */}
      <ContactUsHomeComponent />
      {/* footer */}
      <FooterComponent />

    </div>
  )
}


export default HomePage
