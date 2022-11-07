import React, { useState } from 'react';
import { Card, Divider } from 'antd';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';

const { Meta } = Card;
 
const ListingCard: React.FC<{}> = (props) => {
    return   <Card
        className='listing-card'
        hoverable
        style={{ width: 286 }}
        cover={<img alt="Cover" src="https://oglasimedia.com/images/2022/8/3/5bc9a4a8-74a0-45e5-9832-cba169bb1ab0.jpg" />}
    >
        <Meta title="Europe Street beat" description="www.instagram.com" />
        <div className="listing-card__price">
            <span>€ 133.500</span>
            <span>~41.639 kn</span>
        </div>
        <Divider />
        <div className="listing-card__footer">
            <span>07.11.2022.</span>
            <div className="listing-card__wish">
                {/* TODO!! props.isFavorite ? <HeartFilled /> : <HeartOutlined /> */}
                <HeartOutlined />
            </div>
        </div>
    </Card>
}

export default ListingCard;