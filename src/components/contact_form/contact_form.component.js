import React from 'react'

import {
  TextField, Button, Grid,
} from '@material-ui/core'

import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { Facebook, LinkedIn, Pinterest } from '@material-ui/icons';


import './contact_form.component.scss'
import ButtonComponent from '../button/button.component'
import SpacerComponent from '../spacer/spacer.component'
import TextInputComponent from '../text_input/text_input.component'



const ContactComponent = () => {
  return (
    <div className="contact_us__contact">
      
      <h2 className="contact_us__contact__title"> Contact Us </h2>
      
      <SpacerComponent space={8} />
      
      <div >
        <h3> Phone </h3>
        <SpacerComponent space={2} />
        <p className="contact_us__contact__text"> +254 700000001 </p>
        
        <SpacerComponent space={8} />
        
        <h3> Address </h3>
        <SpacerComponent space={2} />
        <p className="contact_us__contact__text"> 
          Suite 36 
        </p>
        <SpacerComponent space={2} />
        <p className="contact_us__contact__text"> 
          Milton Keynes Business Center 
        </p>
        <SpacerComponent space={2} />
        <p className="contact_us__contact__text"> 
          Foxhunter Drive 
        </p>
        <SpacerComponent space={2} />
        <p className="contact_us__contact__text"> 
          MK14 6GD 
        </p>
      </div>
    
    
      <SpacerComponent space={20} />
      <div style={{ alignSelf: 'center' }} 
            className="contact_us__contact__socials">

          <div className="contact_us__contact__socials__link contact_us__contact__socials__link__ig">
            <InstagramIcon
              style={{
                fontSize: '1.2em'
              }}
            />
          </div>

          <div className="contact_us__contact__socials__link contact_us__contact__socials__link__twitter"> 
            <TwitterIcon className=""
              style={{
                fontSize: '1.2em'
              }} />
          </div>

          <div className="contact_us__contact__socials__link contact_us__contact__socials__link__fb">  
            <Facebook className="" 
              style={{
                fontSize: '1.2em'
              }} />
          </div>
            
          <div className="contact_us__contact__socials__link contact_us__contact__socials__link__lk">
            <LinkedIn className="" 
              style={{
                fontSize: '1.2em'
              }} />
          </div>
          

      </div>
    </div>
  )
}

const FormComponent = () => {
  return (
    <div>

      {/* name */}
      <TextInputComponent
        id="user_name"
        name="user_name"
        value={null}
        onChange={()=>{}}
        placeholder="ex. Wakili Mkubwa"
        labelText="Enter your name*"
        labelWidth={132}
        isFullWidth={true}
      />

      {/* email */}
      <TextInputComponent
        id="user_email"
        name="user_email"
        type="email"
        value={null}
        onChange={()=>{}}
        placeholder="ex. Wakili@gmail.com"
        labelText="Enter your email*"
        labelWidth={132}
        isFullWidth={true}
      />

      {/* phone */}
      <TextInputComponent
        id="user_phone"
        name="user_phone"
        type="tel"
        value={null}
        onChange={()=>{}}
        placeholder="ex. +254 700100200"
        labelText="Enter your phone number*"
        labelWidth={200}
        isFullWidth={true}
      />

      <SpacerComponent space={2} />

      {/* choose file */}
      <label> File </label>
      <SpacerComponent space={2} />
      <input 
        id="user_file"
        name="user_file"
        type="file"
        label="Choose file"
      />

      <SpacerComponent space={15} />

      {/* message */}
      <TextInputComponent
        id="user_message"
        name="user_message"
        type="text"
        value={null}
        onChange={()=>{}}
        placeholder="ex. I wanted to..."
        labelText="Enter your message*"
        labelWidth={160}
        isFullWidth={true}
        multiline={true}
        rows={5}
      />

      <SpacerComponent space={6} />
      <ButtonComponent title="Submit" onClick={ ()=>{} } />

    </div>
  )
}

const ContactFormComponent = () => {
  return (
    <div className="contact_form">
      <Grid container spacing={2} style={{  }}>

        <Grid item xs={12} sm={12} md={6}>
          <ContactComponent />
        </Grid>

        <Grid item xs={12} sm={12} md={6}>
          <FormComponent />
        </Grid>

      </Grid>
    </div>
  )
}


export default ContactFormComponent
