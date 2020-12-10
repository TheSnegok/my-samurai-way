import React from 'react'
import s from '../ProfileInfo.module.css'
import facebookRed from '../../../../assets/images/facebook-red.svg';
import githubRed from '../../../../assets/images/red-github.svg';
import instagramRed from '../../../../assets/images/red-instagram.svg';
import linkRed from '../../../../assets/images/red-link.svg';
import twitterRed from '../../../../assets/images/red-twitter.svg';
import vkBlue from '../../../../assets/images/vk-blue.svg';
import websiteRed from '../../../../assets/images/red-website.svg';
import youtubeRed from '../../../../assets/images/red-youtube.svg';

const Contacts = ({profile}) => {
    const socialName = profile.contacts;
    const Contact = ({social, sourceImg}) => {
        let fullLink = `https://www.${social}`;
        return (
            <div className={s.contacts_blocks}>
                <a href={fullLink} target="_blank" rel="noopener noreferrer">
                    <img alt='facebook' src={sourceImg} className={s.icons} />
                </a>
            </div>
        )};

    return (
        <div className={s.contacts}>
            {socialName.facebook &&  <Contact social={socialName.facebook} sourceImg={facebookRed} />}
            {socialName.github &&  <Contact social={socialName.github} sourceImg={githubRed} />}
            {socialName.instagram &&  <Contact social={socialName.instagram} sourceImg={instagramRed} />}
            {socialName.mainLink &&  <Contact social={socialName.mainLink} sourceImg={linkRed} />}
            {socialName.twitter &&  <Contact social={socialName.twitter} sourceImg={twitterRed} />}
            {socialName.vk &&  <Contact social={socialName.vk} sourceImg={vkBlue} />}
            {socialName.website &&  <Contact social={socialName.website} sourceImg={websiteRed} />}
            {socialName.youtube &&  <Contact social={socialName.youtube} sourceImg={youtubeRed} />}
        </div>
    )
}

export default Contacts;