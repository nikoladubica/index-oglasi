import React, { useState } from 'react';
import { Card, Divider } from 'antd';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';

const { Meta } = Card;
 
const ListingCard: React.FC<{ card: any }> = (props) => {
    const priceKN = (props.card.price * 7.54).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    const priceEUR = props.card.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    const date = new Date(props.card.postedTime)
    const dateFormatted = date.toLocaleDateString('de-DE')

    console.log(props.card)

    return   <Card
        className='listing-card'
        hoverable
        style={{ width: 286 }}
        cover={<img alt="Cover" src="https://oglasimedia.com/images/2022/8/3/5bc9a4a8-74a0-45e5-9832-cba169bb1ab0.jpg" />}
    >
        <Meta title={props.card.title} description="www.instagram.com" />
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