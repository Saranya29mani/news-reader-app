import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu, Card, Col, Row, Descriptions } from 'antd';
import Pagination from 'antd/lib/pagination/Pagination';
const { Header, Content } = Layout;

export const BusinessNews = () => {
    let [data, setData] = useState(null);
    const pageSize = 4;
    let [totalPage, setTotalPage] = useState(0);
    let [currentPage, setCurrentPage] = useState(1);
    let [minIndex, setMinIndex] = useState(0);
    let [maxIndex, setMaxIndex] = useState(pageSize);


    const getNews = (type) => {
        fetch("http://newsapi.org/v2/everything?q=" + type + "&from=2021-02-23&to=2021-02-23&sortBy=popularity&apiKey=a7ad818d1a854b40b26e57ebfa5ab356").then(
            response => response.json()).then(res => {
                setData(res);
                setCurrentPage(1);
                setTotalPage(res.articles.length / pageSize);
                setMinIndex(0);
                setMaxIndex(pageSize);
            }).catch(err => console.log(err));
    }


    useEffect(() => {
        getNews("Apple")
    }, []);

    const handleChange = (pageNum) => {
        setCurrentPage(pageNum);
        setMinIndex((pageNum - 1) * pageSize);
        setMaxIndex(pageNum * pageSize);
    };

    return (
        <Layout className="layout">
            <Header>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" onClick={() => getNews("Apple")}>Apple
                    </Menu.Item>
                    <Menu.Item key="2" onClick={() => getNews("Tesla")}>Tesla</Menu.Item>
                    <Menu.Item key="3" onClick={() => getNews("sports")}>Sports</Menu.Item>
                    <Menu.Item key="4" onClick={() => getNews("health")}> Health
                    </Menu.Item>
                    <Menu.Item key="5" onClick={() => getNews("Entertainment")}> Entertainment
                    </Menu.Item>
                    <Menu.Item key="6" onClick={() => getNews("Science")}> Science
                    </Menu.Item>
                    <Menu.Item key="7" onClick={() => getNews("Technology")}> Technology
                    </Menu.Item>
                    <Menu.Item key="8" onClick={() => getNews("Politics")}> Politics
                    </Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '50px' }}>
                <div className="site-layout-content">
                    {
                        data &&
                        <React.Fragment>
                            <Row gutter={16}>
                                {data.articles.map(
                                    (article, index) =>
                                        index >= minIndex &&
                                        index < maxIndex &&
                                        <Col span={12}>
                                            <Card title={article.author} bordered={false}>
                                                <div>
                                                    <Descriptions title={article.title} >
                                                        <Descriptions.Item>{article.description}</Descriptions.Item>
                                                    </Descriptions>
                                                    <a href={article.url}>Read more.....</a>
                                                </div>

                                            </Card>
                                        </Col>
                                )}
                            </Row>
                            <div style={{ margin: '50px' }}>
                                <Pagination current={currentPage} pageSize={pageSize} total={totalPage} onChange={(e) => handleChange(e)} />
                            </div>

                        </React.Fragment>
                    }
                </div>
            </Content>
        </Layout>
    )
}