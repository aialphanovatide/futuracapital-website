import React from 'react'
import logo from '../../img/logo_page.svg'
import img_page from '../../img/resource_desktop_2.svg'
import img_page_mobile from '../../img/resource_mobile_2.svg'
import './pageTwo.css'
function PageTwo() {
  return (
    <div className='page_container'>
        <p className='tittle-page'>Your Swiss Partner in Stability and Growth</p>
        <p className='paragraph-page'>Founded on Swiss finance values, Futura Capital AG is dedicated to client success and market stability. Our expert team combines technical insights with a flexible approach, building trust through transparent communication and shared goals.</p>
        <img src={img_page} className='resource-style-2 desktop' alt="" />
        <img src={img_page_mobile} className='resource-style-2 mobile' alt="" />
        <p className='paragraph-page'>Our mission is to turn uncertainty into opportunity with Swiss precision and strategic foresight, guiding clients toward long-term stability.</p>
    </div>
  )
}

export default PageTwo