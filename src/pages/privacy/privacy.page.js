import React from 'react'



import SpacerComponent from '../../components/spacer/spacer.component'
import AppBarComponent from '../../components/appbar/appbar.component'
import FooterComponent from '../../components/footer/footer.component'
import PrivacyItemComponent from '../../components/privacy_item/privacy_item.component'

import './privacy.page.scss'


const PrivacyPage = () => {
  return (
    <div>

      {/* app bar */}
      <AppBarComponent />    

      {/* space */}
      <SpacerComponent space={30} />

      <PrivacyItemComponent
        content={
          <>
            <h2 className="privacy_item__title"> Title 1 </h2>
            <p className="privacy_item__text">
                As a professional Security provider with a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services. With a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services. With a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services. 
            </p>
            <p className="privacy_item__text">
                As a professional Security provider with a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services. With a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services. With a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services. 
            </p>
            
            <SpacerComponent space={20} />

            <h2 className="privacy_item__title"> Title 1 </h2>
            <p className="privacy_item__text">
                As a professional Security provider with a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services. With a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services. With a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services. 
            </p>
            <p className="privacy_item__text">
                As a professional Security provider with a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services. With a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services. With a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services. 
            </p>
            
            <SpacerComponent space={20} />

            <h2 className="privacy_item__title"> Title 1 </h2>
            <p className="privacy_item__text">
                As a professional Security provider with a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services. With a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services. With a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services. 
            </p>
            <p className="privacy_item__text">
                As a professional Security provider with a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services. With a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services. With a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services. 
            </p>
            
            <SpacerComponent space={20} />

            <h2 className="privacy_item__title"> Title 1 </h2>
            <p className="privacy_item__text">
                As a professional Security provider with a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services. With a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services. With a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services. 
            </p>
            <p className="privacy_item__text">
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

export default PrivacyPage
