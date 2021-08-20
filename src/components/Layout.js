import React, { useEffect, useState } from "react";
import { Layout, Menu, Dropdown, message, Badge, Avatar, Drawer, List, Typography, Statistic } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    BellOutlined,
    DownOutlined,
    SettingOutlined,
    KeyOutlined,
    LogoutOutlined,
    FlagOutlined,
    CheckOutlined,
    EditOutlined,
    NotificationOutlined,
    PieChartOutlined,
    CalendarOutlined,
    QuestionOutlined,
    DashboardOutlined
} from '@ant-design/icons';
import '../css/teacher.css'
import { domain } from '../helper'

const { Header, Sider } = Layout;

function handleMenuClick(e) {
    message.info('Click on menu item.');
    console.log('click', e);
}

const menu = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="1" icon={<SettingOutlined />}>
            Cài đặt
        </Menu.Item>
        <Menu.Item key="2" icon={<FlagOutlined />}>
            English
        </Menu.Item>
        <Menu.Item key="3" icon={<KeyOutlined />}>
            Đổi mật khẩu
        </Menu.Item>
        <Menu.Item key="4" icon={<LogoutOutlined />}>
            Đăng xuất
        </Menu.Item>
    </Menu>
);

function LayoutDashboard({children}) {
    const [collapsed, setCollapsed] = useState(false);
    const [notification, setNotification] = useState(false);

    const toggle = () => {
        if(collapsed){
            setCollapsed(false);
        }else{
            setCollapsed(true);
        }

    }

    const onOpenNotification = () => {
        setNotification(true);
    }

    const onCloseNotification = () => {
        setNotification(false);
    }

    const notificationLists = [
        {
            title: 'Ant Design Title 1',
        },
        {
            title: 'Ant Design Title 2',
        },
        {
            title: 'Ant Design Title 3',
        },
        {
            title: 'Ant Design Title 4',
        },
    ]

    return(
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo">
                    <img src='https://about.gitlab.com/images/press/logo/png/gitlab-logo-1-color-black-rgb.png' />
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<DashboardOutlined  />}>
                        Tổng quan
                    </Menu.Item>
                    <Menu.Item key="2" icon={<CalendarOutlined  />}>
                        Lịch dạy
                    </Menu.Item>
                    <Menu.Item key="3" icon={<CheckOutlined  />}>
                        Chấm điểm
                    </Menu.Item>
                    <Menu.Item key="4" icon={<QuestionOutlined />}>
                        Trả lời câu hỏi
                    </Menu.Item>
                    <Menu.Item key="5" icon={<EditOutlined />}>
                        Soạn bài giảng
                    </Menu.Item>
                    <Menu.Item key="6" icon={<NotificationOutlined />}>
                        Thông báo nhóm
                    </Menu.Item>
                    <Menu.Item key="7" icon={<PieChartOutlined />}>
                        Báo cáo
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: toggle,
                    })}
                    <div className="trigger" onClick={toggle}/>
                    <div className="right">
                        <div onClick={onOpenNotification}>
                            <Badge count={5}>
                                <BellOutlined />
                            </Badge>
                        </div>
                        <div>
                            <Dropdown overlay={menu}>
                                <div>
                                    <img src={`${domain()}/images/img2.png`} /> Nguyễn Đức Đỉnh <DownOutlined />
                                </div>
                            </Dropdown>
                        </div>
                    </div>
                </Header>
                {children}
            </Layout>
            <Drawer
                title="Thông báo"
                placement='right'
                closable={true}
                visible={notification}
                key='right'
                width='400'
                onClose={onCloseNotification}
            >
                <List
                    itemLayout="horizontal"
                    dataSource={notificationLists}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title={<a href="https://ant.design">{item.title}</a>}
                                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                            />
                        </List.Item>
                    )}
                />
            </Drawer>
        </Layout>
    )
}

export default LayoutDashboard
