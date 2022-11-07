import React from "react";
import ListingCard from "./ListingCard";
import { RightOutlined } from "@ant-design/icons";

const Listing: React.FC<{}> = () => {
    const cards = [
        {
            "isFavorite": false,
            "summary": {
            "area": 98.0,
            "yearBuilt": "2019-06-01T00:00:00Z",
            "numberOfRooms": 6
            },
            "category": "flats",
            "videoUrl": null,
            "id": "448707db-7326-410d-81b4-14b8cbc8f982",
            "imageIds": [
            "https://www.index.hr/oglasi/userdocsimages/oglas/_2022/4/10/3428629/k16815_20220410022555683_5_.jpg"
            ],
            "module": "real-estate",
            "postedTime": "2022-08-04T10:11:12.9520801Z",
            "price": 156000.0,
            "title": "Stan Virovitica (Brekinja), 98m2, 5+ sobni",
            "smartLink": "stan-virovitica-brekinja-98m2-5-sobni",
            "code": 3572912,
            "priceCurrency": "EUR"
        },
        {
            "isFavorite": false,
            "summary": {
            "area": 98.0,
            "yearBuilt": "2019-06-01T00:00:00Z",
            "numberOfRooms": 6
            },
            "category": "flats",
            "videoUrl": null,
            "id": "448707db-7326-410d-81b4-14b8cbc8f982",
            "imageIds": [
            "https://www.index.hr/oglasi/userdocsimages/oglas/_2022/4/10/3428629/k16815_20220410022555683_5_.jpg"
            ],
            "module": "real-estate",
            "postedTime": "2022-08-04T10:11:12.9520801Z",
            "price": 156000.0,
            "title": "Stan Virovitica (Brekinja), 98m2, 5+ sobni",
            "smartLink": "stan-virovitica-brekinja-98m2-5-sobni",
            "code": 3572912,
            "priceCurrency": "EUR"
        },
        {
            "isFavorite": false,
            "summary": {
            "area": 98.0,
            "yearBuilt": "2019-06-01T00:00:00Z",
            "numberOfRooms": 6
            },
            "category": "flats",
            "videoUrl": null,
            "id": "448707db-7326-410d-81b4-14b8cbc8f982",
            "imageIds": [
            "https://www.index.hr/oglasi/userdocsimages/oglas/_2022/4/10/3428629/k16815_20220410022555683_5_.jpg"
            ],
            "module": "real-estate",
            "postedTime": "2022-08-04T10:11:12.9520801Z",
            "price": 156000.0,
            "title": "Stan Virovitica (Brekinja), 98m2, 5+ sobni",
            "smartLink": "stan-virovitica-brekinja-98m2-5-sobni",
            "code": 3572912,
            "priceCurrency": "EUR"
        },
        {
            "isFavorite": false,
            "summary": {
            "area": 98.0,
            "yearBuilt": "2019-06-01T00:00:00Z",
            "numberOfRooms": 6
            },
            "category": "flats",
            "videoUrl": null,
            "id": "448707db-7326-410d-81b4-14b8cbc8f982",
            "imageIds": [
            "https://www.index.hr/oglasi/userdocsimages/oglas/_2022/4/10/3428629/k16815_20220410022555683_5_.jpg"
            ],
            "module": "real-estate",
            "postedTime": "2022-08-04T10:11:12.9520801Z",
            "price": 156000.0,
            "title": "Stan Virovitica (Brekinja), 98m2, 5+ sobni",
            "smartLink": "stan-virovitica-brekinja-98m2-5-sobni",
            "code": 3572912,
            "priceCurrency": "EUR"
        },
        {
            "isFavorite": false,
            "summary": {
            "area": 98.0,
            "yearBuilt": "2019-06-01T00:00:00Z",
            "numberOfRooms": 6
            },
            "category": "flats",
            "videoUrl": null,
            "id": "448707db-7326-410d-81b4-14b8cbc8f982",
            "imageIds": [
            "https://www.index.hr/oglasi/userdocsimages/oglas/_2022/4/10/3428629/k16815_20220410022555683_5_.jpg"
            ],
            "module": "real-estate",
            "postedTime": "2022-08-04T10:11:12.9520801Z",
            "price": 156000.0,
            "title": "Stan Virovitica (Brekinja), 98m2, 5+ sobni",
            "smartLink": "stan-virovitica-brekinja-98m2-5-sobni",
            "code": 3572912,
            "priceCurrency": "EUR"
        },
        {
            "isFavorite": false,
            "summary": {
            "area": 98.0,
            "yearBuilt": "2019-06-01T00:00:00Z",
            "numberOfRooms": 6
            },
            "category": "flats",
            "videoUrl": null,
            "id": "448707db-7326-410d-81b4-14b8cbc8f982",
            "imageIds": [
            "https://www.index.hr/oglasi/userdocsimages/oglas/_2022/4/10/3428629/k16815_20220410022555683_5_.jpg"
            ],
            "module": "real-estate",
            "postedTime": "2022-08-04T10:11:12.9520801Z",
            "price": 156000.0,
            "title": "Stan Virovitica (Brekinja), 98m2, 5+ sobni",
            "smartLink": "stan-virovitica-brekinja-98m2-5-sobni",
            "code": 3572912,
            "priceCurrency": "EUR"
        },
        {
            "isFavorite": false,
            "summary": {
            "area": 98.0,
            "yearBuilt": "2019-06-01T00:00:00Z",
            "numberOfRooms": 6
            },
            "category": "flats",
            "videoUrl": null,
            "id": "448707db-7326-410d-81b4-14b8cbc8f982",
            "imageIds": [
            "https://www.index.hr/oglasi/userdocsimages/oglas/_2022/4/10/3428629/k16815_20220410022555683_5_.jpg"
            ],
            "module": "real-estate",
            "postedTime": "2022-08-04T10:11:12.9520801Z",
            "price": 156000.0,
            "title": "Stan Virovitica (Brekinja), 98m2, 5+ sobni",
            "smartLink": "stan-virovitica-brekinja-98m2-5-sobni",
            "code": 3572912,
            "priceCurrency": "EUR"
        },
        {
            "isFavorite": false,
            "summary": {
            "area": 98.0,
            "yearBuilt": "2019-06-01T00:00:00Z",
            "numberOfRooms": 6
            },
            "category": "flats",
            "videoUrl": null,
            "id": "448707db-7326-410d-81b4-14b8cbc8f982",
            "imageIds": [
            "https://www.index.hr/oglasi/userdocsimages/oglas/_2022/4/10/3428629/k16815_20220410022555683_5_.jpg"
            ],
            "module": "real-estate",
            "postedTime": "2022-08-04T10:11:12.9520801Z",
            "price": 156000.0,
            "title": "Stan Virovitica (Brekinja), 98m2, 5+ sobni",
            "smartLink": "stan-virovitica-brekinja-98m2-5-sobni",
            "code": 3572912,
            "priceCurrency": "EUR"
        },
    ];

    return <div className='listing section transparent'>
        <h2 className="listing__title">Najnovije nekretnine</h2>

        <div className="listing__cards">
            {cards.map(card => 
                <ListingCard />
            )}
        </div>

        <div className="listing__more">
            <span>Vidi više</span>
            <RightOutlined />
        </div>
    </div>;
}

export default Listing;