import React from 'react';

const Breadcrumb: React.FC<{}> = () => {
    return (
        <div className="breadcrumb section">
            <div className="breadcrumb__back noedge-button back">
                <img src="/img/icons/back.svg" alt="Back icon" />
                <span>Natrag</span>
            </div>

            <div className="breadcrumb__item">Početna</div>
            <div className="breadcrumb__item active">Nekretnine</div>
        </div>
    );
}

export default Breadcrumb;
