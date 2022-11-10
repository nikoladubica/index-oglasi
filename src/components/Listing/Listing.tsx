import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";
import { RightOutlined } from "@ant-design/icons";

import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../store';
import { RootState } from '../../store/reducers';

const Listing: React.FC<{}> = () => {
    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state)

    const { filterData } = bindActionCreators(actionCreators, dispatch)

    const cards = Object.assign(state.data)
    
    const [page, setPage] = useState(1);

    const moreItemsHandler = () => {
        setPage(page + 1)
        console.log(page)
    };

    useEffect(() => {
        if (page > 1) filterData(Object.assign(state.original), state.filters, page)
    }, [page])

    return <div className='listing section transparent'>
        <h2 className="listing__title">Najnovije nekretnine</h2>

        <div className="listing__cards">
            {Object.values(cards.data).map((card, index) => 
                <ListingCard key={index} card={card}  />
            )}
        </div>

        <div className="listing__more">
            <span onClick={moreItemsHandler}>Vidi više</span>
            <RightOutlined />
        </div>
    </div>;
}

export default Listing;