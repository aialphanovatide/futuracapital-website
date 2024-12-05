import React from 'react'
import './pageFour.css'
import Core from '../core'
import res_1 from '../../img/resource1_page_4.svg'
import res_2 from '../../img/resource2_page_4.svg'
function PageFour() {
  return (
    <div className='page_container'>
        <p className='tittle-page'>Our Services</p>
        <div className='service-container'>
          <Core image={res_1} tittle="Commodity Trading" description="We offer strategic trading of high-value commodities such as gold, copper, grain and soybeans—backed by in-depth market insights and Swiss values." extraStyle="-dif"/>
          <Core image={res_2} tittle="Financial Hedging Solutions" description="Our tailored hedging solutions mitigate volatility, providing clients with stability, transforming risk into resilience." extraStyle="-dif"/>
        </div>
    </div>
  )
}

export default PageFour