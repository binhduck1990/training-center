import React, { useEffect, useState } from "react";
import { Layout, Button, Card, Typography, Statistic, Checkbox, Select, DatePicker, Space  } from 'antd';
import '../../css/course-list.css';
import LayoutDashboard from "../../components/Layout";
import { getCourseComing, apiGetLessionOver } from "../../Api";
import { handleError } from "../../helper";
import MomentReact from 'react-moment';
import * as moment from 'moment';
import { 
    DownloadOutlined ,
    PieChartTwoTone,
    AreaChartOutlined,
    EnterOutlined ,
    NotificationOutlined
} from '@ant-design/icons';

const { Content } = Layout;
const {Option} = Select;
const { Text, Link } = Typography;

export default function CourseList() {
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
                <Card title="Lịch học trực tuyến" className="card-teacher-dashboard" >
                    <div className="boxfilter">
                        <div>
                            <DatePicker picker="week" />
                            <Select defaultValue="Lớp học"  style={{ width: 250 }}>
                                <Option value="jack">Lớp Tiếng Anh cơ bản 1</Option>
                                <Option value="lucy">Lớp Tiếng Anh cơ bản 2</Option>
                                <Option value="Yiminghe">Lớp Tiếng Anh nâng cao 1</Option>
                            </Select>
                            <Checkbox checked='true' className="check1">Đang học</Checkbox>
                            <Checkbox checked='false' className="check2">Chưa học</Checkbox>
                            <Checkbox className="check3">Đã kết thúc</Checkbox>
                        </div>
                        <div>
                            <div className="time-range">
                                Tuần 35: Từ 23/8/2021 đến 29/8/2021 
                            </div>
                        </div>
                    </div>
                    <div className="box-results">
                        <table className="table-course-list-1">
                            <thead>
                                <tr>
                                    <th>
                                        
                                    </th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    <p>Thứ 2</p>
                                    <p>23/8/2021</p>
                                </td>
                                <td>
                                    <table className="sub-table">
                                        <tr>
                                            <td>7:00 - 8:30</td>
                                            <td>
                                                <Text type="danger">Lớp bồi dưỡng lãnh đạo, quản lý cấp phòng</Text>
                                                <p>CHUYÊN ĐỀ: KỸ NĂNG TỔ CHỨC THỰC HIỆN KẾ HOẠCH</p>
                                            </td>
                                            <td>
                                            <Button type="primary" icon={<AreaChartOutlined />} size="small" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>9:00 - 10:40</td>
                                            <td>
                                                <Text type="success">BỒI DƯỠNG THEO TIÊU CHUẨN CHỨC DANH BẢO VỆ VIÊN BẢO VỆ THỰC VẬT HẠNG III</Text>
                                                <p>TIÊU CHUẨN CHỨC DANH BẢO VỆ VIÊN BẢO VỆ THỰC VẬT HẠNG III VÀ ĐẠO ĐỨC NGHỀ NGHIỆP</p>
                                            </td>
                                            <td>
                                            <Button type="primary" icon={<AreaChartOutlined />} size="small" />
                                            <Button type="primary" icon={<NotificationOutlined />} size="small" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>13:10 - 16:30</td>
                                            <td>
                                                <Text>KHAI GIẢNG - HƯỚNG DẪN HỌC ONLINE LỚP KIỂM DỊCH VIÊN ĐỘNG VẬT - KIỂM DỊCH VIÊN THỰC VẬT 18.8.2020</Text>
                                                <p>TỔ CHỨC BỘ MÁY HÀNH CHÍNH NHÀ NƯỚC CHUYÊN NGÀNH BẢO VỆ VÀ KIỂM DỊCH THỰC VẬT</p>
                                            </td>
                                            <td>
                                            <Button type="primary" icon={<AreaChartOutlined />} size="small" />
                                            <Button type="primary" icon={<NotificationOutlined />} size="small" />
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Thứ 3</p>
                                    <p>24/8/2021</p>
                                </td>
                                <td>
                                    <table className="sub-table">
                                        <tr>
                                            <td>7:00 - 8:30</td>
                                            <td>
                                                <Text type="danger">Lớp bồi dưỡng lãnh đạo, quản lý cấp phòng</Text>
                                                <p>CHUYÊN ĐỀ: LÃNH ĐẠO QUẢN LÝ CẤP PHÒNG VÀ VẤN ĐỀ ĐỔI MỚI QUẢN LÝ ĐƠN VỊ SỰ NGHIỆP CÔNG LẬP</p>
                                            </td>
                                            <td>
                                            <Button type="primary" icon={<AreaChartOutlined />} size="small" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>9:00 - 10:40</td>
                                            <td>
                                                <Text type="success">Lớp bồi dưỡng lãnh đạo, quản lý cấp phòng</Text>
                                                <p>CHUYÊN ĐỀ: CẢI CÁCH HÀNH CHÍNH VÀ VẤN ĐỀ ĐẶT RA ĐỐI VỚI LÃNH ĐẠO CẤP PHÒNG</p>
                                            </td>
                                            <td>
                                            <Button type="primary" icon={<AreaChartOutlined />} size="small" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>13:10 - 16:30</td>
                                            <td>
                                                <Text>Lớp bồi dưỡng lãnh đạo, quản lý cấp phòng</Text>
                                                <p>CHUYÊN ĐỀ: KINH NGHIỆM VỀ LÃNH ĐẠO QUẢN LÝ CỦA CẤP PHÒNG Ở TRUNG ƯƠNG, ĐỊA PHƯƠNG VÀ TRÊN THẾ GIỚI</p>
                                            </td>
                                            <td>
                                            <Button type="primary" icon={<AreaChartOutlined />} size="small" />
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Thứ 4</p>
                                    <p>25/8/2021</p>
                                </td>
                                <td>
                                    <table className="sub-table">
                                        <tr>
                                            <td>7:00 - 8:30</td>
                                            <td>
                                                <Text type="danger">BỒI DƯỠNG THEO TIÊU CHUẨN CHỨC DANH BẢO VỆ VIÊN BẢO VỆ THỰC VẬT HẠNG III</Text>
                                                <p>TIÊU CHUẨN CHỨC DANH BẢO VỆ VIÊN BẢO VỆ THỰC VẬT HẠNG III VÀ ĐẠO ĐỨC NGHỀ NGHIỆP</p>
                                            </td>
                                            <td>
                                            <Button type="primary" icon={<AreaChartOutlined />} size="small" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>9:00 - 10:40</td>
                                            <td>
                                                <Text type="success">BỒI DƯỠNG NGHIỆP VỤ QUẢN LÝ NHÀ NƯỚC NGẠCH KIỂM DỊCH VIÊN THỰC VẬT</Text>
                                                <p>CẢI CÁCH HÀNH CHÍNH NHÀ NƯỚC</p>
                                            </td>
                                            <td>
                                            <Button type="primary" icon={<AreaChartOutlined />} size="small" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>13:10 - 16:30</td>
                                            <td>
                                                <Text>BỒI DƯỠNG NGHIỆP VỤ QUẢN LÝ NHÀ NƯỚC NGẠCH KIỂM DỊCH VIÊN ĐỘNG VẬT</Text>
                                                <p>CÔNG VỤ, CÔNG CHỨC KIỂM DỊCH ĐỘNG VẬT</p>
                                            </td>
                                            <td>
                                            <Button type="primary" icon={<AreaChartOutlined />} size="small" />
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </Card>
                </div>
            </Content>
        </LayoutDashboard>
    )
}