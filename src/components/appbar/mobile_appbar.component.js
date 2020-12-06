import React from 'react'

import clsx from 'clsx'
import { Link, useHistory } from 'react-router-dom'
import {
    Hidden, AppBar, Toolbar, Button
} from '@material-ui/core'

import './simple_appbar.component.scss'
import ButtonComponent from '../button/button.component'


const MobileAppBarComponent = ({ currentPath }) => {
  const history = useHistory()

  const goToWorkWithUs = ()=> history.push('/work-with-us')

  return (
    <>
    <AppBar elevation={1} style={{ backgroundColor: 'white' }}>
    <div className="mobile_app_bar">

      <div className="mobile_app_bar__top">
        
        {/* logo */}
        <p className="app_bar__logo">
            LGS
        </p>

        {/* cta */}
        <ButtonComponent title="Contact Us" onclick={goToWorkWithUs} 
          styles={{
            // padding: '4px 8px'
          }}
        />
        {/* <Button color="primary" variant="contained" size="small"> 
          Contact Us 
        </Button> */}

      </div>
        
      <div className="mobile_app_bar__links">

        {/* services */}
        <Link to="/services"
              className={
                clsx({
                  "app_bar__links__item": true, 
                  "app_bar__links__link": true,
                  "app_bar__links__link_active": currentPath == "/services"
                })
              }> 
            Services </Link>
        
        {/* news */}
        <Link to="/news" 
              className={
                clsx({
                  "app_bar__links__item": true, 
                  "app_bar__links__link": true,
                  "app_bar__links__link_active": currentPath == "/news"
                })
              }> 
            News 
        </Link>
        
        {/* work with us */}
        <Link to="/work-with-us" 
              className={
                clsx({
                  "app_bar__links__item": true, 
                  "app_bar__links__link": true,
                  "app_bar__links__link_active": currentPath == "/work-with-us"
                })
              }> 
            Work With Us 
        </Link>

      </div>
        
    </div>
    </AppBar>

    <Toolbar />
    </>
  )
}


export default MobileAppBarComponent
