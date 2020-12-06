import React from 'react'

import './work_with_us.page.scss'

import SpacerComponent from '../../components/spacer/spacer.component'
import SlidesComponent from '../../components/slide_item/slides.component'
import AppBarComponent from '../../components/appbar/appbar.component'
import FooterComponent from '../../components/footer/footer.component'
import ContactFormComponent from '../../components/contact_form/contact_form.component'



const WorkWithUsPage = () => {
  return (
    <div className="">
 
       {/* app bar */}
       <AppBarComponent />
       
       {/* slides */}
       <SlidesComponent />
       
       {/* space */}
       <SpacerComponent space={30} />
 
       <ContactFormComponent />

       {/* space */}
       <SpacerComponent space={30} />
 
       {/* footer */}
       <FooterComponent />
 
    </div>
  )
}

export default WorkWithUsPage
