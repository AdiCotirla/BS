import React from 'react'
import "../Styling/Contact.css"
import * as VscIcons from "react-icons/vsc"
export default function Contact() {
  return (
    <div>
        <div className='container-form'>
                <VscIcons.VscMail className='icon-form' />
                
                <form action="https://formsubmit.co/adioprea53@gmail.com" method="POST" className='form' >
                    <input type="email" name="Recenzie" required className='text-area' placeholder='Quick feedback' />
                    <input type="number" id="quantity" name="stele"  placeholder="Stars" min="1" max="5"/>
                    <button type="submit" className='button-submit'>SUBMIT</button>
                </form>
            </div>
    </div>
  )
}
