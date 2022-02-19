import './Footer.style.css';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <InstagramIcon/> <TwitterIcon/> <FacebookIcon/> <LinkedInIcon/>
            </div>
            <p> &copy; 2022 Omri Cohen</p>
        </div>
    );
}

export default Footer;
