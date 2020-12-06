import React from 'react'

import './news.page.scss'

import img4 from '../../assets/images/Event-security.jpg'
import img5 from '../../assets/images/VIP Guards.jpg'


import SpacerComponent from '../../components/spacer/spacer.component'
import AppBarComponent from '../../components/appbar/appbar.component'
import FooterComponent from '../../components/footer/footer.component'
import NewsItemComponent from '../../components/news_item/news_item.component'


const NewsPage = () => {
  return (
    <div>

      {/* app bar */}
      <AppBarComponent />    

      {/* space */}
      <SpacerComponent space={40} />

      <NewsItemComponent
        imageSrc={img4}
        title="Security Operative prevents a distribution center fire"
        date="31 July 2020"
        text={
          <>
            <p className="news_item__text">
              As a professional Security provider with a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services. With a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services. With a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services. 
            </p>
            <p className="news_item__text">
              As a professional Security provider with a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services. With a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services. With a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services. 
            </p>
            <p className="news_item__text">
              As a professional Security provider with a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services. With a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services. With a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services. 
            </p>
            <p className="news_item__text">
              As a professional Security provider with a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services. With a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services. With a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services. 
            </p>
            <p className="news_item__text">
              As a professional Security provider with a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services. With a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services. With a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services. 
            </p>
          </>
        }
        imgThenText={true}
      />
      
      {/* space */}
      <SpacerComponent space={40} />

      <NewsItemComponent
        imageSrc={img5}
        title="Security Operative prevents a distribution center fire"
        date="2 July 2020"
        text={
          <>
            <p className="news_item__text">
              As a professional Security provider with a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services. With a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services. With a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services. 
            </p>
            <p className="news_item__text">
              As a professional Security provider with a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services. With a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services. With a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services. 
            </p>
            <p className="news_item__text">
              As a professional Security provider with a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services. With a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services. With a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services. 
            </p>
            <p className="news_item__text">
              As a professional Security provider with a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services. With a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services. With a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services. 
            </p>
            <p className="news_item__text">
              As a professional Security provider with a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services. With a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services. With a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services. 
            </p>
          </>
        }
      />

    
      {/* space */}
      <SpacerComponent space={40} />

      {/* footer */}
      <FooterComponent />

    </div>
  ) 
}

export default NewsPage
