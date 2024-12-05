import React from 'react';
import './core.css';

const Core = ({ extraStyle = '', image, alt, tittle, description }) => {

    const coreClass = `core${extraStyle}`;
    const imgClass = `img-core${extraStyle}`;

    return (
        <div className={coreClass}>
            <img src={image} alt={alt} className={imgClass} />
            <p className='tittle-core'>{tittle}</p>
            <p className='description-core'>{description}</p>
        </div>
    );
}

export default Core;
