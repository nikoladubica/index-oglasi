import React from 'react';
import { Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const Header: React.FC<{}> = () => {
    const onSearch = (event: any) => {}
    
    return (
        <div className="header">
            <div className="header__center">
                <div className="header__burger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className="header__left-side">
                    <img className='header__logo' src="/img/logo.svg" alt="Index Oglasi logo" />
                    <Input.Search placeholder="Upisite pojam..." onSearch={onSearch} enterButton />
                </div>

                <SearchOutlined className='header__mobile-search' />

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
