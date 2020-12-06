import React from 'react'
import PropTypes from 'prop-types'
import {
    Button,
} from '@material-ui/core'


function ButtonComponent({ title, onClick, styles }) {
  return (
    <Button 
       variant="contained" 
       color="primary" 
       disableElevation
       onClick={onClick}
       style={{
        border: '2px solid white',
        borderRadius: '8px',
        fontWeight: '600',
        ...styles
       }}>
        { title }
    </Button>
  )
}

ButtonComponent.propTypes = {
    title: PropTypes.string.isRequired, 
    onClick: PropTypes.func.isRequired,
}

export default ButtonComponent

