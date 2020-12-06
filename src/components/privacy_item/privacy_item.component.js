import React from 'react'
import PropTypes from 'prop-types'
import {
    Grid
} from '@material-ui/core'



const PrivacyItemComponent = ({ content }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={1} sm={1} md={1}/>

      {/* content */}
      <Grid item xs={10} sm={10} md={10}>
        { content }
      </Grid>
      
      <Grid item xs={1} sm={1} md={1}/>
    </Grid>
  )
}

PrivacyItemComponent.propTypes = {
    content: PropTypes.any.isRequired
}

export default PrivacyItemComponent
