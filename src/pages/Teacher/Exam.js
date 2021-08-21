import React, { useEffect, useState } from "react";
import { Layout, Button, Card, Typography, Statistic } from 'antd';
import '../../css/exam.css';
import LayoutDashboard from "../../components/Layout";
import { getCourseComing, apiGetLessionOver } from "../../Api";
import { handleError } from "../../helper";
import MomentReact from 'react-moment';
import * as moment from 'moment';

const { Content } = Layout;

export default function Exam() {
    return(
        <LayoutDashboard>
            <Content
                className="site-layout-background"
                style={{
                    margin: '24px 16px',
                    minHeight: 280,
                }}
            >
                <div>
                    aaaaaaaaaaaa
                </div>
            </Content>
        </LayoutDashboard>
    )
}