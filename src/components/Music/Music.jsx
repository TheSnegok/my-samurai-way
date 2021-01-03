import React from 'react';
import MainHeader from '../common/MainHeader/MainHeader';
import s from './Music.module.css'

const Music = () => {
    return (
        <div>
            <MainHeader text='Music' />
            <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" title="soundcloud" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293&amp;{}">
            </iframe>
        </div>
    );
}

export default Music;