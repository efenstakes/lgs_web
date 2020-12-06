import React from 'react'
import PropTypes from 'prop-types'

import {
    Grid,
} from '@material-ui/core'

import SecurityIcon from '@material-ui/icons/Security';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import LockIcon from '@material-ui/icons/Lock';
import VpnLockIcon from '@material-ui/icons/VpnLock';
import FlagIcon from '@material-ui/icons/Flag';


import './service_icons.component.scss'



const ServiceIconsComponent = () => {
  return (
    // <Grid container  spacing={2} 
        //  style={{ padding: '40px 32px 40px 32px' }}
        // >
    <div
       style={{
         display: 'flex',
         flexDirection: 'row',
         justifyContent: 'center',
         flexWrap: 'wrap'
       }}>

       <ServiceIconComponent 
          text="Deter Thieves and Vandals"
          icon={
            <SecurityIcon 
               style={{ fontSize: '56px', alignSelf: 'center' }}
            />
          }
       />
       
       <ServiceIconComponent 
          text="Protect Your Site Workers"
          icon={
            <LocationCityIcon 
              style={{ fontSize: '64px', alignSelf: 'center' }}
            />
          }
       />
       
       <ServiceIconComponent 
          text="Protect against Fire and Flooding"
          icon={
            <WhatshotIcon 
              style={{ fontSize: '64px', alignSelf: 'center' }}
            />
          }
       />
       
       <ServiceIconComponent 
          text="Control Access"
          icon={
            <LockIcon 
              style={{ fontSize: '64px', alignSelf: 'center' }}
            />
          }
       />
       
       <ServiceIconComponent 
          text="Prevent and Resolve Conflict"
          font
          icon={
            <FlagIcon 
              style={{ fontSize: '64px', alignSelf: 'center' }}
            />
          }
       />

    </div>
  )
}

ServiceIconsComponent.propTypes = {

}




const ServiceIconComponent = ({ icon, text }) => {

  return (
    // <Grid item xs={12} sm={6} md={3} lg={2}> 
      <div className="service_icon">
        { icon }
        {/* <div>{ icon }</div> */}
        <h4 className="service_icon__text"> { text } </h4>

      </div>
    // </Grid>
  )
}


export default ServiceIconsComponent
