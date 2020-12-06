import React from 'react'
import PropTypes from 'prop-types'

import {
    Grid
} from '@material-ui/core'


import './news_item.component.scss'
import SpacerComponent from '../spacer/spacer.component'


const NewsItemComponent = ({ imageSrc, title, date, text, imgThenText }) => {
  return (
    <div className="news_item">

      <Grid container spacing={2}>

        {
          imgThenText
          ?
          <>
            <Image src={imageSrc} />
            <Text title={title} date={date} text={text} />
          </>
          :
          <>
            <Text title={title} date={date} text={text} />
            <Image src={imageSrc} />
          </>
        }
        

      </Grid>
      
    </div>
  )
}

const Image = ({ src })=> {
  return(
    <Grid item xs={12} sm={12} md={6}>
      <div className="news_item__image_container">
        
        <img src={src} 
          alt="news image" 
          className="news_item__image" 
        />
      </div>
    </Grid>
  )
}

const Text = ({ title, date, text }) => {
  return (
    <Grid item item xs={12} sm={12} md={6}>
      <h2 className="news_item__title"> 
        {title} 
      </h2>
      <SpacerComponent space={3} />
      <h4 className="news_item__date"> 
        {date} 
      </h4>
      <SpacerComponent space={6} />
      { text }
    </Grid>
  )
}

// const NewsItemComponent = ({ imageSrc, text }) => {
//   return (
//     <div className="news_item">

//       <Grid container spacing={2}>
//         <Grid item xs={1} sm={1} md={2}/>

//         {/* image */}
//         <Grid item xs={12} sm={10} md={8}>
//           <div className="news_item__image_container">
            
//             <img src={imageSrc} 
//               alt="news image" 
//               className="news_item__image" 
//             />
//           </div>
//         </Grid>
        
//         <Grid item xs={1} sm={1} md={2}/>
//       </Grid>

//       <Grid container spacing={2}>
//         <Grid item xs={1} sm={1} md={2}/>

//         {/* text */}
//         <Grid item xs={12} sm={10} md={8}>
//           {
//             text
//           }
//         </Grid>

//         <Grid item xs={1} sm={1} md={2}/>
//       </Grid>
      
//     </div>
//   )
// }

NewsItemComponent.propTypes = {
    imageSrc: PropTypes.any.isRequired,
    text: PropTypes.any.isRequired,
}

export default NewsItemComponent
