import React from 'react'
import PropTypes from 'prop-types'

import {
  Grid
} from '@material-ui/core'


import SpaceComponent from '../spacer/spacer.component'
import './service_item.component.scss'
import SpacerComponent from '../spacer/spacer.component'



// const ServiceItemComponent = ({ imageSrc, title, text, cta }) => {
//   return (
//     <Grid container spacing={2} 
//           style={{ 
//             // marginLeft: '20px', 
//             // marginRight: '20px', 
//             // marginBottom: '12px',
//             // height: '440px',
//             // backgroundColor: 'green'
//           }}>

//       {/* image */}
//       <Grid item xs={12} sm={6} md={6}>
//         <div className="service_item__image_container">
//             <img src={imageSrc} 
//                  alt="service image" 
//                  className="service_item__image_container__image" 
//             />
//         </div>
//       </Grid>

//       {/* content */}
//       <Grid item xs={12} sm={6} md={6} 
//             style={{
//               backgroundColor: 'peru'
//             }}>
//         {/* <div> */}
//           <h2 className="service_item__title"> {title} </h2>
//           <p className="service_item__subtitle"> {text} </p>
//           {cta}
//         {/* </div> */}
//       </Grid>

//     </Grid>
//  )
// }

const Image = ({ src })=> {
  return (
    <Grid item xs={12} sm={6} md={6}
          style={{ backgroundColor: 'inherit' }}>
      
      <div className="service_item__image_container">
          <img src={src} 
                alt="service image" 
                className="service_item__image_container__image" 
          />
      </div>

    </Grid>
  )
}
const Content = ({ title, text, cta, extras })=> {
  return (
    <Grid item xs={12} sm={6} md={6} 
          style={{ backgroundColor: 'inherit' }}>

      <div className="service_item__content">
          <h2 className="service_item__content__title"> {title} </h2>
          {/* <p className="service_item__content__subtitle"> {text} </p> */}
          <div className="service_item__content__text_container"> {text} </div>
          <SpacerComponent space={10} />
          <div className="service_item__content__extras"> {extras} </div>
          <SpaceComponent space={20} />
          <div className="service_item__content__ctas"> {cta} </div>
      </div>

    </Grid>
  )
}

const ServiceItemComponent = ({ imageSrc, title, text, cta, imgThenText, extras }) => {
  return (
    <div className="service_item">

      <Grid container spacing={3}>
        {/* <Grid item xs={1} sm={1} md={1} /> */}
        {
          imgThenText 
          ?
          <>
            <Image src={imageSrc} />
            <Content title={title} text={text} cta={cta} extras={extras} />
          </>
          :
          <>
            <Content title={title} text={text} cta={cta} extras={extras} />
            <Image src={imageSrc} />
          </>
        }
        {/* <Grid item xs={1} sm={1} md={1} /> */}
      </Grid>

    </div>
 )
}
// const ServiceItemComponent = ({ imageSrc, title, text, cta, imgThenText }) => {
//   return (
//     <div className="service_item">

//       {
//         imgThenText 
//         ?
//         <>
//           <Image src={imageSrc} />
//           <Content title={title} text={text} cta={cta} />
//         </>
//         :
//         <>
//           <Content title={title} text={text} cta={cta} />
//           <Image src={imageSrc} />
//         </>
//       }
      

//     </div>
//  )
// }



ServiceItemComponent.propTypes = {

}

export default ServiceItemComponent
