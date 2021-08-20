import React, { useEffect, useState } from "react";
import { Layout, Button, Card, Typography, Statistic } from 'antd';
import '../../css/teacher.css';
import LayoutDashboard from "../../components/Layout";
import { getCourseComing } from "../../Api";
import { handleError } from "../../helper";

const { Content } = Layout;
const { Text } = Typography;
const { Countdown } = Statistic;

export default function TeacherDashboard() {
    const [listCourseComing, setListCourseComing] = useState([])
    useEffect( () => {
        async function getListCourseComing(){
            try{
                const listCourseComing = await getCourseComing()
                setListCourseComing(listCourseComing)
            }catch (e) {
                handleError(e)
            }
        }
        getListCourseComing()
    }, [])
    console.log('listCourseComing', listCourseComing)
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
                        <tr>
                            <td>
                                <Text type="success">08:30 - 17/08</Text>
                            </td>
                            <td>Đào tạo kiểm định khóa 1</td>
                            <td>
                                <strong>
                                    <Button type="primary" size="">Tham gia ngay</Button>
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
                        <tr>
                            <td>08:10 - 19/08</td>
                            <td>Lập trình Pascal</td>
                            <td>
                                <Countdown title="Diễn ra sau" value={Date.now() + 20026 * 1000} />
                            </td>
                        </tr>
                        <tr>
                            <td>08:10 - 20/08</td>
                            <td>Lịch sử đảng</td>
                            <td>
                                <Countdown title="Diễn ra sau" value={Date.now() + 40044 * 1000} />
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </Card>
            </Content>
        </LayoutDashboard>
    )
}
