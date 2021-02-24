import React from 'react';
import 'antd/dist/antd.css';
import { Card, Col, Row } from 'antd';
import {  Link } from "react-router-dom";

export const CardComp = () => {
    return (
        <div className="site-card-wrapper" style={{ margin: '100px', padding: '50px' }}>
            <Row gutter={16}>
                <Col span={8}>
                    <Card title="All news" bordered={false}>
                        <Link to="/allnews">All news</Link>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Business news" bordered={false}>
                        <Link to="/businessnews/news">Business sources</Link>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="US news" bordered={false}>
                        <Link to="/us-news"> Sources in the US</Link>
                    </Card>
                </Col>
            </Row>


        </div>)
}