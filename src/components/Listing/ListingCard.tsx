import React, { useState } from 'react';
import { Card, Divider, Carousel } from 'antd';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';

const { Meta } = Card;
 
const ListingCard: React.FC<{ card: any }> = (props) => {
    const [like, setLike] = useState(props.card.isFavorite)
    const date = new Date(props.card.postedTime)
    const dateBuilt = new Date(props.card.summary.yearBuilt)

    const cardObject = {
        title: props.card.title,
        date: date.toLocaleDateString('de-DE'),
        dateBuilt: dateBuilt.toLocaleDateString('de-DE') + ' · ',
        area: props.card.summary.area ? props.card.summary.area + 'm² · ' : '',
        rooms: props.card.summary.numberOfRooms ? 'Broj soba: ' + props.card.summary.numberOfRooms : '',
        priceEUR: props.card.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."),
        priceKN: parseInt((props.card.price * 7.54).toString()).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    }

    const carousel = <Carousel swipeToSlide draggable>
        {props.card.imageIds.map((image: any, index: number) => <img key={index} alt="Cover" src={image} />)}
    </Carousel>;

    const likeHandler = () => {
        setLike(like ? false : true)
    }

    return   <Card
        className='listing-card'
        hoverable
        style={ window.innerWidth >= 768 ? { width: 286 } : {}}
        cover={carousel}
    >
        <Meta title={cardObject.title} description={cardObject.area + cardObject.dateBuilt + cardObject.rooms} />
        <div className="listing-card__price">
            <span>€ {cardObject.priceEUR}</span>
            <span>~{cardObject.priceKN} kn</span>
        </div>
        <Divider />
        <div className="listing-card__footer">
            <span>{cardObject.date}</span>
            <div className="listing-card__wish" onClick={likeHandler}>
                {like ? <HeartFilled /> : <HeartOutlined />}
            </div>
        </div>
    </Card>
}

export default ListingCard;