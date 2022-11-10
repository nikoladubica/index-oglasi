import React, { useState } from 'react';
import { Card, Divider } from 'antd';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';

const { Meta } = Card;
 
const ListingCard: React.FC<{ card: any }> = (props) => {
    const priceKN = parseInt((props.card.price * 7.54).toString()).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    const priceEUR = props.card.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    const date = new Date(props.card.postedTime)
    const dateBuilt = new Date(props.card.summary.yearBuilt)
    const dateFormatted = date.toLocaleDateString('de-DE')
    const dateBuiltFormatted = dateBuilt.toLocaleDateString('de-DE')
    const coverImage = props.card.imageIds[0]
    const numOfRooms = props.card.summary.numberOfRooms ? ' · Broj soba: ' + props.card.summary.numberOfRooms : ''

    return   <Card
        className='listing-card'
        hoverable
        style={{ width: 286 }}
        cover={coverImage ? <img alt="Cover" src={coverImage} /> : <div className='listing-card__fallback'></div>}
    >
        <Meta title={props.card.title} description={props.card.summary.area + 'm² · Izgrađeno: ' + dateBuiltFormatted + numOfRooms} />
        <div className="listing-card__price">
            <span>€ {priceEUR}</span>
            <span>~{priceKN} kn</span>
        </div>
        <Divider />
        <div className="listing-card__footer">
            <span>{dateFormatted}</span>
            <div className="listing-card__wish">
                {/* TODO!! props.isFavorite ? <HeartFilled /> : <HeartOutlined /> */}
                <HeartOutlined />
            </div>
        </div>
    </Card>
}

export default ListingCard;