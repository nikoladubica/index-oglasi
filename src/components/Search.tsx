import React, { useEffect } from 'react';
import { Radio, Space, Select, Input, Button, Row, Col, Divider } from 'antd';

import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../store';
import { RootState } from '../store/reducers';

const Search: React.FC<{}> = () => {
    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state)

    const { setFilters, filterData } = bindActionCreators(actionCreators, dispatch)

    const { Option, OptGroup } = Select;
   
    const categoryChangeHandler = (e: any) => {
        setFilters({key: 'category', value: e})
    };

    const locationChangeHandler = (e: any) => {
        setFilters({key: 'location', value: e})
    };

    useEffect(() => {
        // setFilters({key: 'category', value: 'houses'})
    }, [])

    useEffect(() => {
        filterData(Object.assign(state.original), state.filters, 1)
    }, [state.filters])

    return (
        <>
            <div className="search section">
                <Radio.Group>
                    <Space direction="vertical">
                        <Radio value={1}>Kupujem</Radio>
                        <Radio value={2}>Iznajmljujem</Radio>
                    </Space>
                </Radio.Group>

                <Row gutter={[20, 20]}>
                    <Col span={8}>
                        <Select
                            defaultValue='Tip nekretnine'
                            onChange={categoryChangeHandler}
                            options={[
                                {
                                    value: 'houses',
                                    label: 'Kuća',
                                },
                                {
                                    value: 'flats',
                                    label: 'Stan',
                                },
                            ]}
                        />
                    </Col>

                    <Col span={8}>
                        <Select placeholder='Lokacija' onChange={locationChangeHandler}>
                            <Option value="">-</Option>
                            <OptGroup label="Centralna Hrvatska">
                                <Option value="Zagreb">Zagreb</Option>
                                <Option value="Karlovac">Karlovac</Option>
                                <Option value="Bjelovar">Bjelovar</Option>
                                <Option value="Rijeka">Rijeka</Option>
                                <Option value="Čakovec">Čakovec</Option>
                                <Option value="Varaždin">Varaždin</Option>
                            </OptGroup>
                            <OptGroup label="Dalmacija">
                                <Option value="Zadar">Zadar</Option>
                                <Option value="Šibenik">Šibenik</Option>
                                <Option value="Split">Split</Option>
                                <Option value="Dubrovnik">Dubrovnik</Option>
                            </OptGroup>
                            <OptGroup label="Slavonija">
                                <Option value="Osijek">Osijek</Option>
                                <Option value="Slavonski Brod">Slavonski Brod</Option>
                                <Option value="Vukovar">Vukovar</Option>
                            </OptGroup>
                            <OptGroup label="Istra">
                                <Option value="Poreč">Poreč</Option>
                                <Option value="Pula">Pula</Option>
                                <Option value="Rovinj">Rovinj</Option>
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
