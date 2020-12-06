import { Grid } from '@material-ui/core'
import React from 'react'


import img1 from '../../assets/images/drone.jpg'
import img2 from '../../assets/images/drone.jpg'
import img3 from '../../assets/images/drone.jpg'

import './worked_with.component.scss'



const WorkedWithComponent = () => {
  return (
    <div className="worked_with">

      <h3 className="worked_with__title"> WORKED WITH </h3> 

      <div className="worked_with__logos">

        <img
            src={img1}
            alt="" 
            className="worked_with__logo"
        />

        <img
            src={img2}
            alt="" 
            className="worked_with__logo"
        />

        <img
            src={img3}
            alt="" 
            className="worked_with__logo"
        />

      </div>

      {/* <Grid container spacing={2}>

        <Grid item xs={12} sm={6} md={4}>
            <img
                src={img1}
                alt="" 
                className="worked_with__logo"
            />
        </Grid>
        
        <Grid item xs={12} sm={6} md={4}>
            <img
                src={img2}
                alt="" 
                className="worked_with__logo"
            />
        </Grid>
        
        <Grid item xs={12} sm={6} md={4}>
            <img
                src={img3}
                alt="" 
                className="worked_with__logo"
            />
        </Grid>

      </Grid> */}
                  
    </div>
  )
}

export default WorkedWithComponent
