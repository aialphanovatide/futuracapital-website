import React from 'react'
import './pageSeven.css'
import Core from '../core'
import res_1 from '../../img/resource1_page_7.svg'
import res_2 from '../../img/resource2_page_7.svg'
function PageSeven() {
  return (
    <div className='page_container'>
        <p className='tittle-page'>Contact Us</p>
        <p className='subtittle-page'>Take the Next Step toward a Secure and Strategic Trading Partnership</p>
        <p className='paragraph-page'>Ready to achieve stability and growth with Swiss confidence? Partner with Futura Capital AG for secure, strategic trading solutions rooted in Swiss finance principles.</p>
        <div className='contact-container'>
          <Core image={res_1} tittle="Email" description="email@email.com"/>
          <Core image={res_2} tittle="Phone number" description="XXX.XXX.XXX"/>
        </div>
    </div>
  )
}

export default PageSeven