import React from 'react';
import Button from './Button';

import FooterWave from '../Images/FooterWave.png'

import FB_SVG from '../Images/Social_FB';
import IG_SVG from '../Images/Social_IN';
import TW_SVG from '../Images/Social_TW';


const Footer = () => {
    return (
        <div className="flex items-end" >
            <div className="px-3 py-20 bg-footer-texture bg-contain bg-left-bottom bg-no-repeat flex-1">
                <img className="object-contain w-3/4" src={FooterWave} alt="Footer" style={{ visibility: 'hidden' }} />
            </div>
            <div className="flex flex-1 justify-end">
                <div className="w-1/4 md:w-1/12">
                    <FB_SVG className="" />
                </div>
                <div className="w-1/4 md:w-1/12">
                    <IG_SVG className="" />
                </div>
                <div className="w-1/4 md:w-1/12">
                    <TW_SVG className="" />
                </div>

            </div>
        </div >

    );
};

export default Footer;