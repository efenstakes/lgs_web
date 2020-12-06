import React from 'react'

import './services.page.scss'


import SpacerComponent from '../../components/spacer/spacer.component'
import SlidesComponent from '../../components/slide_item/slides.component'
import AppBarComponent from '../../components/appbar/appbar.component'
import ServiceItemsComponent from '../../components/service_item/service_items.component'
import FooterComponent from '../../components/footer/footer.component'
import VServiceItemsComponent from '../../components/service_item/vservice_items.component'



const ServicesPage = () => {
  return (
    <div>
  
      {/* app bar */}
      <AppBarComponent />
       
      {/* slides */}
      <SlidesComponent />

      {/* space */}
      <SpacerComponent space={30} />

      {/* services  */}
      <ServiceItemsComponent />

      {/* space */}
      <SpacerComponent space={30} />

      {/* vertical */}
      <VServiceItemsComponent />

      {/* space */}
      <SpacerComponent space={30} />

      {/* footer */}
      <FooterComponent />
  
    </div>
  )
}

export default ServicesPage
