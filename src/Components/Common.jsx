import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import Pagination from 'antd/lib/pagination/Pagination';
import { Card, Col, Row, Descriptions } from 'antd';

export const CommonComp = (props) => {
    const { url } = props;
    let [data, setData] = useState(null);
    const pageSize = 4;
    let [totalPage, setTotalPage] = useState(0);
    let [currentPage, setCurrentPage] = useState(1);
    let [minIndex, setMinIndex] = useState(0);
    let [maxIndex, setMaxIndex] = useState(pageSize);

     const getNews = (type) => {
        fetch(url + "apiKey=a7ad818d1a854b40b26e57ebfa5ab356").then(
            response => response.json()).then(res => {
                //
                setCurrentPage(1);
                setTotalPage(res.sources.length / pageSize);
                setMinIndex(0);
                setMaxIndex(pageSize);
                console.log(res)
                setData(res.sources);
            }).catch(err => console.log(err));
    }

    useEffect(() => {
        getNews("Apple");
    }, []);

    const handleChange = (pageNum) => {
        setCurrentPage(pageNum);
        setMinIndex((pageNum - 1) * pageSize);
        setMaxIndex(pageNum * pageSize);
    };

    return (

        <div>
            {
                data &&
                <React.Fragment>
                    <Row gutter={16}>
                        {data.map(
                            (source, index) =>
                                index >= minIndex &&
                                index < maxIndex &&
                                <Col span={12}>
                                    <Card title={`Author: ${source.name}`} bordered={false}>
                                        <div>
                                            <Descriptions title={`Category: ${source.category}`} >
                                                <Descriptions.Item><b>Description</b>:{source.description}</Descriptions.Item>
                                            </Descriptions>
                                            <a href={source.url}>Read more.....</a>
                                        </div>

                                    </Card>
                                </Col>
                        )}
                        <Pagination showSizeChanger={false} current={currentPage} pageSize={pageSize} total={totalPage} onChange={(e) => handleChange(e)} />
                    </Row>
                </React.Fragment>
            }
        </div>
    )
}