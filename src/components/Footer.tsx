import React from 'react';

const Footer: React.FC<{}> = () => {
    return (
        <div className='footer'>
            <div className='footer__top'>
                <div className='footer__logo'>
                    <img src='/img/logo.svg' alt='Index Oglasi logo' />
                </div>

                <div className='footer__contact'>
                    <div className='footer__contact-item'>
                        <span className='footer__contact-item__label'>Trebate pomoć?</span>
                        <span className='footer__contact-item__value'>01/549 4478</span>
                    </div>

                    <div className='footer__contact-item'>
                        <span className='footer__contact-item__label'>Radno vrijeme</span>
                        <span className='footer__contact-item__value'>Svaki dan 8-24</span>
                    </div>

                    <div className='footer__contact-item'>
                        <span className='footer__contact-item__label'>E-mail</span>
                        <span className='footer__contact-item__value'>indexoglasi@margon.hr</span>
                    </div>
                </div>

                <div className='footer__impressum'>
                    <div>
                        <a href="#">Uvjeti korištenja</a>
                        <a href="#">Oglašavanje</a>
                        <a href="#">Upute za korištenje</a>
                        <a href="#">FAQ</a>
                    </div>
                    <div>
                        <a href="#">Pravila o privatnosti</a>
                        <a href="#">Upute za postavljanje videa</a>
                    </div>
                </div>
            </div>

            <div className='footer__bottom'>Index Oglasi Copyright © 2021</div>
        </div>
    );
}

export default Footer;
