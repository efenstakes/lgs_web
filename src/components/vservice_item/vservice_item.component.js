import React from 'react'
import PropTypes from 'prop-types'

import {
  Grid
} from '@material-ui/core'

import SpacerComponent from '../spacer/spacer.component'
import './vservice_item.component.scss'




const Image = ({ src })=> {
  return (
    <div className="vservice_item__image_container">
        <img src={src} 
            alt="service image" 
            className="vservice_item__image_container__image" 
        />
    </div>
  )
}
const Content = ({ title, text, cta })=> {
  return (
    <div className="vservice_item__content">
      <SpacerComponent space={4} />
      <h2 className="service_item__content__title"> 
        {title} 
      </h2>
      <p className="service_item__content__subtitle"> 
        {text} 
      </p>
      <SpacerComponent space={12} />
      {cta}
    </div>
  )
}

const VserviceItemComponent = ({ imageSrc, title, text, cta }) => {
  return (
    <div className="vservice_item">
        <Image src={imageSrc} />
        <Content title={title} text={text} cta={cta} />
    </div>
 )
}
VserviceItemComponent.propTypes = {

}

export default VserviceItemComponent
