import React from 'react'
import PropTypes from 'prop-types'

import './slide_item.component.scss'


const SlideItemComponent = ({ title, text, cta }) => {


  return (
    <div className="slide_item__content">
      <h1  className="slide_item__content__title"> { title } </h1> 
      <h3 className="slide_item__content__subtitle"> { text } </h3> 
      { cta }
    </div>
  )
}

SlideItemComponent.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    cta: PropTypes.any,
}

export default SlideItemComponent
