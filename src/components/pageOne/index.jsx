import React from 'react'
import logo from '../../img/logo_page.svg'
import './pageOne.css'
import CirclesAnim from '../circlesAnim'
const PageOne = ({isActive}) => {
  return (
    <div className='page_container'>
        <img src={logo} className='resource-logo-style' alt="futura capital logo" />
        <p className='tittle-page'>Precision and Protection in Commodities and Hedging</p>
        <CirclesAnim animate={isActive}/>
        <p className='paragraph-page'>Operating at the highest Swiss standards, we deliver strategic expertise in commodity trading and financial hedging solutions. A trusted, secure and compliant partner, tailored to turn market volatility into growth.</p>
    </div>
  )
}

export default PageOne