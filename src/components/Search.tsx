import React, { useState } from 'react';
import { Radio, Space, Select, Input, Button, Row, Col, Divider } from 'antd';

const Search: React.FC<{}> = () => {
    const { Option, OptGroup } = Select;
    const [value, setValue] = useState(1);

    const onChange = (e: any) => {
        setValue(e.target.value);
    };

    const handleMenuClick = (e: any) => {
        console.log('click', e);
    };
   
    const handleChange = (e: any) => {
        console.log('click', e);
    };

    return (
        <>
            <div className="search section">
                <Radio.Group onChange={onChange} value={value}>
                    <Space direction="vertical">
                        <Radio value={1}>Kupujem</Radio>
                        <Radio value={2}>Iznajmljujem</Radio>
                    </Space>
                </Radio.Group>

                <Row gutter={[20, 20]}>
                    <Col span={8}>
                        <Select
                            defaultValue='home'
                            onChange={handleChange}
                            options={[
                                {
                                    value: 'home',
                                    label: 'Kuća',
                                },
                                {
                                    value: 'apartment',
                                    label: 'Stan',
                                },
                                {
                                    value: 'parcel',
                                    label: 'Plac',
                                },
                                {
                                    value: 'land',
                                    label: 'Zemlja',
                                },
                            ]}
                        />
                    </Col>

                    <Col span={8}>
                        <Select placeholder='Lokacija'>
                            <Option value="">-</Option>
                            <OptGroup label="Centralna Hrvatska">
                                <Option value="1">Zagreb</Option>
                                <Option value="2">Karlovac</Option>
                                <Option value="3">Bjelovar</Option>
                                <Option value="4">Rijeka</Option>
                                <Option value="5">Čakovec</Option>
                                <Option value="6">Varaždin</Option>
                            </OptGroup>
                            <OptGroup label="Dalmacija">
                                <Option value="7">Zadar</Option>
                                <Option value="8">Šibenik</Option>
                                <Option value="9">Split</Option>
                                <Option value="10">Dubrovnik</Option>
                            </OptGroup>
                            <OptGroup label="Slavonija">
                                <Option value="11">Osijek</Option>
                                <Option value="12">Slavonski Brod</Option>
                                <Option value="13">Vukovar</Option>
                            </OptGroup>
                            <OptGroup label="Istra">
                                <Option value="14">Poreč</Option>
                                <Option value="15">Pula</Option>
                                <Option value="16">Rovinj</Option>
                            </OptGroup>
                        </Select>
                    </Col>

                    <Col span={8}>
                        <Input placeholder='Kvadratura' suffix="m²" />
                    </Col>

                    <Col span={8}>
                        <Input placeholder='Cijena do' suffix="€" />
                    </Col>

                    <Col span={8}>
                        <Space>
                            <Select placeholder='Broj soba od'>
                                <Option value="1">1</Option>
                                <Option value="2">2</Option>
                                <Option value="3">3</Option>
                                <Option value="4">4</Option>
                            </Select>

                            <Divider type="vertical" />

                            <Select placeholder='Broj soba do'>
                                <Option value="1">1</Option>
                                <Option value="2">2</Option>
                                <Option value="3">3</Option>
                                <Option value="4">4</Option>
                            </Select>
                        </Space>
                    </Col>

                    <Col span={8}>
                        <Button type="primary" size="large" danger>
                            TRAŽI
                        </Button>
                    </Col>
                </Row>
            </div>

            <div className="search__more">
                <span>Detaljnija pretraga</span>
                <img src="/img/icons/back.svg" alt="More icon" />
            </div>
        </>
    );
}

export default Search;
