import React from 'react'
import PropTypes from 'prop-types'

import './testimony.component.scss'
import SpaceComponent from '../spacer/spacer.component'


const TestimonyComponent = ({ name, text }) => {
  return (
    <div className="testimony_card">

      <p className="testimony_card__said testimony_card__text">
        { text }
      </p>
      <SpaceComponent space={12} />
      <h3 className="testimony_card__name testimony_card__text">
        { name }
      </h3>
    
    </div>
  )
}

TestimonyComponent.propTypes = {
    name: PropTypes.string.isRequired, 
    text: PropTypes.string.isRequired,
}

export default TestimonyComponent
