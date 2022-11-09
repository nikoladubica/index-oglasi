import React from "react";
import ListingCard from "./ListingCard";
import { RightOutlined } from "@ant-design/icons";

import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';

const Listing: React.FC<{}> = () => {
    const state = useSelector((state: RootState) => state.bank)
    // const cards = [{}, {}, {}, {}, {}, {}, {}, {}];
    const cards = state

    return <div className='listing section transparent'>
        <h2 className="listing__title">Najnovije nekretnine</h2>

        <div className="listing__cards">
            {Object.values(cards).map((card, index) => 
                <ListingCard key={index} card={card}  />
            )}
        </div>

        <div className="listing__more">
            <span>Vidi više</span>
            <RightOutlined />
        </div>
    </div>;
}

export default Listing;