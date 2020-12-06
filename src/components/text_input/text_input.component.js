import React from 'react'
import PropTypes from 'prop-types'

import { 
    InputAdornment, FormControl, OutlinedInput, InputLabel
} from '@material-ui/core'
import { green, red } from '@material-ui/core/colors';


const TextInputComponent = ({ value, labelText, placeholder, name, id, type, onChange, onKeyPress, labelWidth, styles, wrapperStyles, startAdornment, endAdornment, multiline, rows, errorText, isFullWidth })=> {
    styles = (styles == null) ? {} : styles
  
    return (
      <FormControl variant="outlined" className=""
          style={{
            marginBottom: '24px',
            maxWidth: '560px',
            minWidth: '360px',
            ...wrapperStyles
          }}>
          <InputLabel htmlFor={id}>
              {labelText}
          </InputLabel>
          <OutlinedInput
            error={ errorText ? true : false }
            multiline={ multiline || false }
            rows={ rows || 0 }
            id={id}
            type={ type || 'text' }
            name={name}
            value={value}
            onChange={onChange}
            onKeyPress={onKeyPress}
            placeholder={placeholder}
            startAdornment={
                <InputAdornment position="start">
                    {startAdornment || ''}
                </InputAdornment>
            }
            endAdornment={
                <InputAdornment position="end">
                    {endAdornment || ''}
                </InputAdornment>
            }
            labelWidth={labelWidth}
            fullWidth
            style={{
                backgroundColor: 'transparent',
                ...styles
            }}
          />

          {
            errorText && 
            <p style={{
                marginTop: '2px',
                marginLeft: '2px',
                fontSize: '.8em',
                color: '#ff1744',
            }}>
              {errorText}
            </p>
          }
          
      </FormControl>
    )
}
  
TextInputComponent.propTypes = {
    value: PropTypes.any.isRequired, 
    labelText: PropTypes.string.isRequired, 
    name: PropTypes.string.isRequired, 
    id: PropTypes.string.isRequired, 
    type: PropTypes.string, 
    onChange: PropTypes.func.isRequired,
    onKeyPress: PropTypes.func, 
    labelWidth: PropTypes.number.isRequired, 
    styles: PropTypes.object, 
    startAdornment: PropTypes.any, 
    endAdornment: PropTypes.any,
    errorText: PropTypes.string,
}



export default TextInputComponent