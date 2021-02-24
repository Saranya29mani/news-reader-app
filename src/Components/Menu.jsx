
import { Menu } from 'antd';
import { Link } from 'react-router-dom';


export const MenuComp = () => (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1"> <Link to="/home"> All sources</Link>
        </Menu.Item>
        <Menu.Item key="2">
            <Link to="/businessnews/news">Generic news</Link>
        </Menu.Item>
    </Menu>)