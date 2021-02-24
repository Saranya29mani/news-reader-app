import React from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import { CardComp } from './Card';
import { AllNews } from './AllNews';
import { BusinessNews } from './BusinessNews';
import { USNews } from './USNews';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { MenuComp } from './Menu';

const { Header, Content, Footer } = Layout;

export const LayoutComponent = () => {

    return (
        <BrowserRouter>
            <Layout className="layout">
                <Header>
                    <MenuComp />
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <div className="site-layout-content">
                        <Switch>
                            <Route exact path="/home" component={CardComp}>
                            </Route>
                            <Route exact path="/businessnews/news">
                                <BusinessNews />
                            </Route>
                            <Switch>
                                <Route exact path="/businessnews/news">
                                    <BusinessNews />
                                </Route>
                                <Route exact path="/us-news">
                                    <USNews />
                                </Route>
                                <Route exact path="/allnews">
                                    <AllNews />
                                </Route>
                            </Switch>
                        </Switch>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </BrowserRouter>
    )
}

//a7ad818d1a854b40b26e57ebfa5ab356