import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'


import img2 from '../../assets/images/cctv camera.jpg'
import img3 from '../../assets/images/Dog handler.jpg'
import img4 from '../../assets/images/Event-security.jpg'
import img5 from '../../assets/images/VIP Guards.jpg'


// import './service_items.component.scss'
import ButtonComponent from '../button/button.component'
import VserviceItemComponent from './vservice_item.component'
import { Grid } from '@material-ui/core'



const VServiceItemsComponent = () => {
  const history = useHistory()

  const goToServices = ()=> history.push('/services')
  const goToWorkWithUs = ()=> history.push('/work-with-us')


  return (
    <div className="vservice_item_list">

      <Grid container spacing={3} style={{ padding: '0px 40px' }}>
        {/* <Grid item xs={1} sm={1} md={1} /> */}

        <Grid item xs={12} sm={6} md={6} 
          style={{ backgroundColor: 'inherit' }}>
        <VserviceItemComponent
            imageSrc={img2}
            title="Work With Us"
            text="As a professional Security provider with a head office centrally located in Milton Keynes"
            cta={
                <ButtonComponent 
                title="Our Services"
                onClick={goToWorkWithUs}
                />
            }
        />
        </Grid>

        <Grid item xs={12} sm={6} md={6} 
          style={{ backgroundColor: 'inherit' }}>
        <VserviceItemComponent
            imageSrc={img3}
            title="Contact Us"
            text="As a professional Security provider with a head office centrally located in Milton Keynes"
            cta={
                <ButtonComponent 
                title="Our Services"
                onClick={goToServices}
                />
            }
        />
        </Grid>

        {/* <Grid item xs={1} sm={1} md={1} /> */}
      </Grid>      
    </div>
  )
}

VServiceItemsComponent.propTypes = {

}

export default VServiceItemsComponent
