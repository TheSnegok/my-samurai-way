import React from 'react';
import preloader from '../../../assets/images/preloader.svg';

let Preloader = (props) => {
    return (
        <div>
            <img alt='img' src={preloader} />
        </div>
    )
}

export default Preloader;