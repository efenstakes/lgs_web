import React from 'react'
import clsx from 'clsx'
import { Link, useHistory } from 'react-router-dom'
import {
    Hidden, AppBar, Toolbar,
} from '@material-ui/core'

import './appbar.component.scss'
import ButtonComponent from '../button/button.component'
import MobileAppBarComponent from './mobile_appbar.component'


const DAppBarComponent = ({ currentPath }) => {
  const history = useHistory()

  const goToWorkWithUs = ()=> history.push('/work-with-us')

  return (
    <>
    <AppBar elevation={1} style={{ backgroundColor: 'white' }}>
    <div className="app_bar">

      {/* logo */}
      <p className="app_bar__logo">
        LGS
      </p>
        
      <div className="app_bar__links">

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

        {/* cta */}
        <ButtonComponent title="Contact Us" onclick={goToWorkWithUs} />

      </div>
        
    </div>
    </AppBar>

    <Toolbar />
    </>
  )
}

function AppBarComponent() {
  const history = useHistory()

  // console.log('history ', history)

  return(
    <>
      <Hidden smUp>
        <MobileAppBarComponent currentPath={history.location.pathname} />
      </Hidden>
      <Hidden xsDown>
        <DAppBarComponent currentPath={history.location.pathname} />
      </Hidden>
    </>
  )
}

export default AppBarComponent
