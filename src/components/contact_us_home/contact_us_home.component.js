import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

import ButtonComponent from '../button/button.component'
import SpacerComponent from '../spacer/spacer.component'
import './contact_us_home.component.scss'


const ContactUsHomeComponent = () => {
  const history = useHistory()

  const goToContact = ()=> history.push('/work-with-us')


  return (
    <div className="contact_us_home">
    
      <h1 className="contact_us_home__title"> Contact Us </h1>
      <SpacerComponent space={4} />
      <p className="contact_us_home__subtitle">
          Request a free no obligation quote today!
      </p>

      <ButtonComponent title="contact us" onClick={ goToContact }/>

    </div>
  )
}

ContactUsHomeComponent.propTypes = {

}

export default ContactUsHomeComponent
