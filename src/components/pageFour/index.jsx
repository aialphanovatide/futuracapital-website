import React from 'react'
import './pageFour.css'
import Core from '../core'
import res_1 from '../../img/resource1_page_4.svg'
import GraphicFour from '../graphicFour'
function PageFour({isActive}) {
  return (
    <div className='page_container'>
        <p className='tittle-page'>Our Services</p>
        <div className='service-container'>
          <Core image={res_1} tittle="Commodity Trading" description="We offer strategic trading of high-value commodities such as gold, copper, grain and soybeans—backed by in-depth market insights and Swiss values." extraStyle="-dif"/>
          <div className="animate-container">
            <GraphicFour animate={isActive}/>
            <p className='tittle-core'>Financial Hedging Solutions</p>
            <p className='description-core'>Our tailored hedging solutions mitigate volatility, providing clients with stability, transforming risk into resilience.</p>
        </div>
        </div>
    </div>
  )
}

export default PageFour