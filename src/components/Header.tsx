import React from 'react';
import { Input, Button } from 'antd';

const Header: React.FC<{}> = () => {
    const onSearch = (event: any) => {
        console.log(event)
    }
    
    return (
        <div className="header">
            <div className="header__center">
                <div className="header__left-side">
                    <img className='header__logo' src="/img/logo.svg" alt="Index Oglasi logo" />
                    <Input.Search placeholder="Upisite pojam..." onSearch={onSearch} enterButton />
                </div>

                <div className="header__right-side">
                    <div className="header__button noedge-button">
                        <img src='/img/icons/heart.svg' alt='Heart icon' />
                        <span>Omiljeni oglasi</span>
                    </div>
                    <div className="header__button noedge-button">
                        <img src='/img/icons/profile.svg' alt='Profile icon' />
                        <span>Prijavi se</span>
                    </div>
                    <Button type='primary' danger>
                        Predaj oglas
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Header;
