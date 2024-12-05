import React from 'react'
import logo from '../../img/logo_page.svg'
import img_page_one from '../../img/resource_page_1.svg'
import './pageOne.css'
function PageOne() {
  return (
    <div className='page_container'>
        <img src={logo} className='resource-logo-style' alt="futura capital logo" />
        <p className='tittle-page'>Precision and Protection in Commodities and Hedging</p>
        <img src={img_page_one} className='resource-style' alt="Venn diagram showing 'Futura Capital' at the intersection of Commodity and Hedging, Precision, and Protection." />
        <p className='paragraph-page'>Operating at the highest Swiss standards, we deliver strategic expertise in commodity trading and financial hedging solutions. A trusted, secure and compliant partner, tailored to turn market volatility into growth.</p>
    </div>
  )
}

export default PageOne