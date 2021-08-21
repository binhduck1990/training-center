import React, { useEffect, useState } from "react";
import { Layout, Button, Card, Typography, Statistic } from 'antd';
import '../../css/teacher.css';
import LayoutDashboard from "../../components/Layout";
import { getCourseComing } from "../../Api";
import { handleError } from "../../helper";
import MomentReact from 'react-moment';
import * as moment from 'moment';

const { Content } = Layout;
const { Text } = Typography;
const { Countdown } = Statistic;

export default function TeacherDashboard() {
    const [listCourseComing, setListCourseComing] = useState([])
    const [startedAt, setStartedAt] = useState('');
    useEffect( () => {
        async function getListCourseComing(){
            try{
                const data = await getCourseComing()
                setListCourseComing(data.result)
                setStartedAt(data.server_ts)
            }catch (e) {
                handleError(e)
            }
        }
        getListCourseComing()
    }, [])
    console.log('startedAt', moment().format('DD-MM-YYYY HH:mm'), moment(startedAt).format('DD-MM-YYYY HH:mm'))
    return(
        <LayoutDashboard>
            <Content
                className="site-layout-background"
                style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 280,
                }}
            >

                <Card title="Buổi học sắp bắt đầu" >
                    <table className="table table-bordered dashboard-table-1">
                        <thead>
                        <tr>
                            <th>Thời gian bắt đầu</th>
                            <th>Khóa học / Môn học</th>
                            <th>Trạng thái</th>
                        </tr>
                        </thead>
                        <tbody>
                        {listCourseComing && listCourseComing.map((item) => {
                            return (
                                <>
                                    <tr key={item._id}>
                                        <td>
                                            <div>{moment.unix(item.start_time_ts).format('HH:mm - DD/MM')}</div>
                                        </td>
                                        <td>{item.name}</td>
                                        <td>
                                            <strong>
                                                <Button type="primary" size="">Tham gia</Button>
                                            </strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>15:10 - 17/08</td>
                                        <td>Lập trình C++</td>
                                        <td>
                                            <Countdown title="Diễn ra sau" value={Date.now() + 5028 * 1000} />
                                        </td>
                                    </tr>
                                </>
                            )
                        })}
                        </tbody>
                    </table>
                </Card>
            </Content>
        </LayoutDashboard>
    )
}
