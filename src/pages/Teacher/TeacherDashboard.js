import React, { useEffect, useState } from "react";
import { Layout, Button, Card, Statistic } from 'antd';
import '../../css/teacher.css';
import LayoutDashboard from "../../components/Layout";
import { apiGetListCourseOver, apiGetCourseOver, apiGetLinkLha } from "../../Api";
import { handleError } from "../../helper";
import * as moment from 'moment';

const { Content } = Layout;
const { Countdown } = Statistic;

export default function TeacherDashboard() {
    const [listCourseComing, setListCourseComing] = useState([])

    const [listCourseOver, setListCourseOver] = useState([])
    const checkTime = function(startTime, endTime) {
        if(startTime - 15 * 60 > Date.now() / 1000) { // Nếu chưa đến thời gian học. CHo phép học trước 15p
            return 0;
        }else{
            if(endTime >= Date.now() / 1000){ // Nếu đã đến thời gian học và chưa kết thúc buổi học
                return 1;
            }else{
                return 2; // Nếu buổi học đã kết thúc
            }
        }
    }

    async function getLinkLha(session_iid){
        try{
            const data = await apiGetLinkLha({session_iid: session_iid})
            console.log(data)
            window.open(data.result.url);
        }catch (e) {
            handleError(e)
        }
    }

    useEffect( () => {
        async function getListCourseComing(){
            try{
                const data = await apiGetListCourseOver()
                setListCourseComing(data.result)
            }catch (e) {
                handleError(e)
            }
        }

        async function getListCourseOver(){
            try{
                const data = await apiGetCourseOver()
                setListCourseOver(data.result)
            }catch (e) {
                handleError(e)
            }
        }

        getListCourseComing()
        getListCourseOver()
    }, [])

    return(
        <LayoutDashboard>
            <Content
                className="site-layout-background"
                style={{
                    margin: '24px 16px',
                    minHeight: 280,
                }}
            >
                <Card title="Buổi học sắp bắt đầu" className="card-teacher-dashboard" >
                    <table className="table table-bordered dashboard-table-1">
                        <thead>
                        <tr>
                            <th>Thời gian học</th>
                            <th>Khóa học / Môn học</th>
                            <th>Trạng thái</th>
                        </tr>
                        </thead>
                        <tbody>
                        {listCourseComing && listCourseComing.map((item) => {
                            return (
                            <tr key={item._id}>
                                <td>

                                    <div className="start-time">
                                        <p>
                                            {moment.unix(item.start_time_ts).format('DD/MM/YYYY')}
                                        </p>
                                        <p>
                                            {moment.unix(item.start_time_ts).format('HH:mm')} - {' ' + moment.unix(item.end_time_ts).format('HH:mm')}
                                        </p>
                                    </div>
                                </td>
                                <td>
                                    <p className="course-name">{item.course_name}</p>
                                    <p className="name">{item.name}</p>
                                </td>
                                <td>
                                {(checkTime(item.start_time_ts, item.end_time_ts) === 1 &&
                                    <strong>
                                        <Button type="primary" size="" onClick={() => getLinkLha(item.iid)}>Tham gia ngay</Button>
                                    </strong>)
                                    || (checkTime(item.start_time_ts, item.end_time_ts) === 0 &&
                                    <Countdown title="Diễn ra sau" value={item.start_time_ts * 1000} />)
                                    || (checkTime(item.start_time_ts, item.end_time_ts) === 2 &&
                                        <p>Buổi học đã kết thúc</p>)
                                    }
                                </td>
                            </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </Card>

                <Card title="Buổi học đã kết thúc"  className="card-teacher-dashboard">
                    <table className="table table-bordered dashboard-table-1">
                        <thead>
                            <tr>
                                <th>Thời gian học</th>
                                <th>Khóa học / môn học</th>
                                <th/>
                            </tr>
                        </thead>
                        <tbody>
                            {listCourseOver && listCourseOver.map((item) => {
                                return (
                                <tr key={item._id}>
                                    <td>
                                        <div className="start-time">
                                            <p>
                                                {moment.unix(item.start_time_ts).format('DD/MM/YYYY')}
                                            </p>
                                            <p>
                                                {moment.unix(item.start_time_ts).format('HH:mm')} - {' ' + moment.unix(item.end_time_ts).format('HH:mm')}
                                            </p>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="course-name">{item.course_name}</p>
                                        <p className="name">{item.name}</p>
                                    </td>
                                    <td>
                                        <strong>
                                            <Button type="primary" size="">Xuất báo cáo</Button>
                                        </strong>
                                    </td>
                                </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </Card>
            </Content>
        </LayoutDashboard>
    )
}
