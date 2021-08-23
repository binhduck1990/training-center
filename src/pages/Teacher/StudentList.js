import React, { useEffect, useState } from "react";
import { Layout, Button, Card, Typography, Statistic, Checkbox, Select, DatePicker, Space, Tabs, Drawer, Input  } from 'antd';
import '../../css/student-list.css';
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
    NotificationOutlined,
    PlusOutlined,
    EditOutlined,
    UserAddOutlined,
    CloseCircleOutlined,
    DeleteOutlined
} from '@ant-design/icons';
import TextArea from "antd/lib/input/TextArea";

const { Content } = Layout;
const {Option} = Select;
const { Text, Link } = Typography;
const { TabPane } = Tabs;


function callback(key) {
    console.log(key);
}

export default function StudentList() {
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };

    const [groupVisible, setGroupVisible] = useState(false);
    const [groupVisibleEdit, setGroupVisibleEdit] = useState(false);
    const groupShowDrawer = () => {
        setGroupVisible(true);
    };
    const groupOnClose = () => {
        setGroupVisible(false);
    };

    const onGroupStudentClose = () => {
        setGroupVisibleEdit(false)
    }

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
                    <div className="course-name-title">
                        <h1>Lớp bồi dưỡng lãnh đạo, quản lý cấp phòng</h1>
                    </div>
                    <Tabs defaultActiveKey="1" onChange={callback} className="student-list-tabs">
                        <TabPane tab="Học viên" key="1">
                            <div className="studen-list">
                                <div className="item">
                                    <div onClick={showDrawer}>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLQfbgXOtc9FQ8N78go6RNqfmHk0_PF_fcRg&usqp=CAU" className="avatar" />
                                            <div className="info">
                                            <p>Phạm Thiên An</p>
                                            <p>
                                                0982746271
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfWDeZCnnLqR6obDRneAb9iBMpu7F1aDTTaA&usqp=CAU" className="avatar" />
                                            <div className="info">
                                            <p>Trần Ngọc Bảo</p>
                                            <p>
                                                0982746271
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div>
                                        <img src="https://www.seekpng.com/png/detail/646-6469674_blue-class-dojo-avatar.png" className="avatar" />
                                            <div className="info">
                                            <p>Hoàng Nguyễn Phúc Nguyên Chương</p>
                                            <p>
                                                0982746271
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-eU2WpPViXIhw1_1uBSA4iJfaMYPKmtK5nA&usqp=CAU" className="avatar" />
                                            <div className="info">
                                            <p>Nguyễn Thanh Danh</p>
                                            <p>
                                                0982746271
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQoCjzjatJE1ajjYFPg58nu0UsI3zM8G-voA&usqp=CAU" className="avatar" />
                                            <div className="info">
                                            <p>Nguyễn Trần Quốc Duy</p>
                                            <p>
                                                0982746271
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div>
                                        <img src="https://spng.pngfind.com/pngs/s/594-5940550_class-dojo-clipart-brown-monster-orange-class-dojo.png" className="avatar" />
                                            <div className="info">
                                            <p>Phan Đức Thanh Duy</p>
                                            <p>
                                                0982746271
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgrWmJKNAHGAm8hEqdu6VUu7K-2PZmNqO0Ool4u2tL2rBw2Ise3g1u7069Ow39TyRrbGc&usqp=CAU" className="avatar" />
                                            <div className="info">
                                            <p>Trần Đình Hưng</p>
                                            <p>
                                                0982746271
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBIiz-OZFudjONjeg5aiMlNf3KlkPckOyoKHX3cvfK_-nX35Vsx6299e44tHEmGl2jqO8&usqp=CAU" className="avatar" />
                                            <div className="info">
                                            <p>Trần Kiên Hưng</p>
                                            <p>
                                                0982746271
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div>
                                        <img src="https://www.clipartmax.com/png/small/12-128404_classdojo-monster-0-classdojo-pinterest-class-dojo-monsters-orange.png" className="avatar" />
                                            <div className="info">
                                            <p>Hứa Tuấn Hữu</p>
                                            <p>
                                                0982746271
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5S3yWJng2aLpHxTV9t-FkmLyJkcOtJkQS9YdcPZNQQJuYPVQyMjAt0kG-Z4l4IcNXmno&usqp=CAU" className="avatar" />
                                            <div className="info">
                                            <p>Hà Đình Đức Huy</p>
                                            <p>
                                                0982746271
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREFZ2Y7KleISg4DUbX2Lzoe2FsqTPMRbfhQ73YJ4K1qU3HHhtlJn5jzYIpGVc5lj_Zuaw&usqp=CAU" className="avatar" />
                                            <div className="info">
                                            <p>Bùi Hứa Xuân Huy</p>
                                            <p>
                                                0982746271
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div>
                                        <img src="https://img.favpng.com/4/2/17/cookie-monster-classdojo-clip-art-png-favpng-PqTByzEst0WB6AdaUyMCp4BhR_t.jpg" className="avatar" />
                                            <div className="info">
                                            <p>Đặng Lê Quốc Khang</p>
                                            <p>
                                                0982746271
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJqRTH5As3UILOaqUb5PG7fn4KHI5gxyrjEDbO6SB7hl2LZ66YcplPaPn8a5RegM7gyj4&usqp=CAU" className="avatar" />
                                            <div className="info">
                                            <p>Phạm Đức Quốc Khánh</p>
                                            <p>
                                                0982746271
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div onClick={showDrawer}>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLQfbgXOtc9FQ8N78go6RNqfmHk0_PF_fcRg&usqp=CAU" className="avatar" />
                                            <div className="info">
                                            <p>Phạm Thiên An</p>
                                            <p>
                                                0982746271
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfWDeZCnnLqR6obDRneAb9iBMpu7F1aDTTaA&usqp=CAU" className="avatar" />
                                            <div className="info">
                                            <p>Trần Ngọc Bảo</p>
                                            <p>
                                                0982746271
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div>
                                        <img src="https://www.seekpng.com/png/detail/646-6469674_blue-class-dojo-avatar.png" className="avatar" />
                                            <div className="info">
                                            <p>Hoàng Nguyễn Phúc Nguyên Chương</p>
                                            <p>
                                                0982746271
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-eU2WpPViXIhw1_1uBSA4iJfaMYPKmtK5nA&usqp=CAU" className="avatar" />
                                            <div className="info">
                                            <p>Nguyễn Thanh Danh</p>
                                            <p>
                                                0982746271
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQoCjzjatJE1ajjYFPg58nu0UsI3zM8G-voA&usqp=CAU" className="avatar" />
                                            <div className="info">
                                            <p>Nguyễn Trần Quốc Duy</p>
                                            <p>
                                                0982746271
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div>
                                        <img src="https://spng.pngfind.com/pngs/s/594-5940550_class-dojo-clipart-brown-monster-orange-class-dojo.png" className="avatar" />
                                            <div className="info">
                                            <p>Phan Đức Thanh Duy</p>
                                            <p>
                                                0982746271
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgrWmJKNAHGAm8hEqdu6VUu7K-2PZmNqO0Ool4u2tL2rBw2Ise3g1u7069Ow39TyRrbGc&usqp=CAU" className="avatar" />
                                            <div className="info">
                                            <p>Trần Đình Hưng</p>
                                            <p>
                                                0982746271
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBIiz-OZFudjONjeg5aiMlNf3KlkPckOyoKHX3cvfK_-nX35Vsx6299e44tHEmGl2jqO8&usqp=CAU" className="avatar" />
                                            <div className="info">
                                            <p>Trần Kiên Hưng</p>
                                            <p>
                                                0982746271
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div>
                                        <img src="https://www.clipartmax.com/png/small/12-128404_classdojo-monster-0-classdojo-pinterest-class-dojo-monsters-orange.png" className="avatar" />
                                            <div className="info">
                                            <p>Hứa Tuấn Hữu</p>
                                            <p>
                                                0982746271
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5S3yWJng2aLpHxTV9t-FkmLyJkcOtJkQS9YdcPZNQQJuYPVQyMjAt0kG-Z4l4IcNXmno&usqp=CAU" className="avatar" />
                                            <div className="info">
                                            <p>Hà Đình Đức Huy</p>
                                            <p>
                                                0982746271
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREFZ2Y7KleISg4DUbX2Lzoe2FsqTPMRbfhQ73YJ4K1qU3HHhtlJn5jzYIpGVc5lj_Zuaw&usqp=CAU" className="avatar" />
                                            <div className="info">
                                            <p>Bùi Hứa Xuân Huy</p>
                                            <p>
                                                0982746271
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div>
                                        <img src="https://img.favpng.com/4/2/17/cookie-monster-classdojo-clip-art-png-favpng-PqTByzEst0WB6AdaUyMCp4BhR_t.jpg" className="avatar" />
                                            <div className="info">
                                            <p>Đặng Lê Quốc Khang</p>
                                            <p>
                                                0982746271
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJqRTH5As3UILOaqUb5PG7fn4KHI5gxyrjEDbO6SB7hl2LZ66YcplPaPn8a5RegM7gyj4&usqp=CAU" className="avatar" />
                                            <div className="info">
                                            <p>Phạm Đức Quốc Khánh</p>
                                            <p>
                                                0982746271
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div onClick={showDrawer}>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLQfbgXOtc9FQ8N78go6RNqfmHk0_PF_fcRg&usqp=CAU" className="avatar" />
                                            <div className="info">
                                            <p>Phạm Thiên An</p>
                                            <p>
                                                0982746271
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfWDeZCnnLqR6obDRneAb9iBMpu7F1aDTTaA&usqp=CAU" className="avatar" />
                                            <div className="info">
                                            <p>Trần Ngọc Bảo</p>
                                            <p>
                                                0982746271
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div>
                                        <img src="https://www.seekpng.com/png/detail/646-6469674_blue-class-dojo-avatar.png" className="avatar" />
                                            <div className="info">
                                            <p>Hoàng Nguyễn Phúc Nguyên Chương</p>
                                            <p>
                                                0982746271
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-eU2WpPViXIhw1_1uBSA4iJfaMYPKmtK5nA&usqp=CAU" className="avatar" />
                                            <div className="info">
                                            <p>Nguyễn Thanh Danh</p>
                                            <p>
                                                0982746271
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQoCjzjatJE1ajjYFPg58nu0UsI3zM8G-voA&usqp=CAU" className="avatar" />
                                            <div className="info">
                                            <p>Nguyễn Trần Quốc Duy</p>
                                            <p>
                                                0982746271
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div>
                                        <img src="https://spng.pngfind.com/pngs/s/594-5940550_class-dojo-clipart-brown-monster-orange-class-dojo.png" className="avatar" />
                                            <div className="info">
                                            <p>Phan Đức Thanh Duy</p>
                                            <p>
                                                0982746271
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgrWmJKNAHGAm8hEqdu6VUu7K-2PZmNqO0Ool4u2tL2rBw2Ise3g1u7069Ow39TyRrbGc&usqp=CAU" className="avatar" />
                                            <div className="info">
                                            <p>Trần Đình Hưng</p>
                                            <p>
                                                0982746271
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBIiz-OZFudjONjeg5aiMlNf3KlkPckOyoKHX3cvfK_-nX35Vsx6299e44tHEmGl2jqO8&usqp=CAU" className="avatar" />
                                            <div className="info">
                                            <p>Trần Kiên Hưng</p>
                                            <p>
                                                0982746271
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div>
                                        <img src="https://www.clipartmax.com/png/small/12-128404_classdojo-monster-0-classdojo-pinterest-class-dojo-monsters-orange.png" className="avatar" />
                                            <div className="info">
                                            <p>Hứa Tuấn Hữu</p>
                                            <p>
                                                0982746271
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5S3yWJng2aLpHxTV9t-FkmLyJkcOtJkQS9YdcPZNQQJuYPVQyMjAt0kG-Z4l4IcNXmno&usqp=CAU" className="avatar" />
                                            <div className="info">
                                            <p>Hà Đình Đức Huy</p>
                                            <p>
                                                0982746271
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREFZ2Y7KleISg4DUbX2Lzoe2FsqTPMRbfhQ73YJ4K1qU3HHhtlJn5jzYIpGVc5lj_Zuaw&usqp=CAU" className="avatar" />
                                            <div className="info">
                                            <p>Bùi Hứa Xuân Huy</p>
                                            <p>
                                                0982746271
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div>
                                        <img src="https://img.favpng.com/4/2/17/cookie-monster-classdojo-clip-art-png-favpng-PqTByzEst0WB6AdaUyMCp4BhR_t.jpg" className="avatar" />
                                            <div className="info">
                                            <p>Đặng Lê Quốc Khang</p>
                                            <p>
                                                0982746271
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJqRTH5As3UILOaqUb5PG7fn4KHI5gxyrjEDbO6SB7hl2LZ66YcplPaPn8a5RegM7gyj4&usqp=CAU" className="avatar" />
                                            <div className="info">
                                            <p>Phạm Đức Quốc Khánh</p>
                                            <p>
                                                0982746271
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tab="Nhóm học viên" key="2">
                            <div className="group-student-list">
                                <div className="item">
                                    <div onClick={groupShowDrawer}>
                                        <img src="https://blog.classdojo.com/static/c2bc84a245fb0be103e6f08e43131f6b/beee3970-c013-4a99-8d09-ac7474bce925.png" className="avatar" />
                                        <div className="info">
                                            <p>Nhóm mặc định</p>
                                            <p>55 thành viên</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div>
                                        <img src="https://blog.classdojo.com/static/c2bc84a245fb0be103e6f08e43131f6b/beee3970-c013-4a99-8d09-ac7474bce925.png" className="avatar" />
                                        <div className="info">
                                            <p>Nhóm 2</p>
                                            <p>40 thành viên</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div>
                                        <img src="https://blog.classdojo.com/static/c2bc84a245fb0be103e6f08e43131f6b/beee3970-c013-4a99-8d09-ac7474bce925.png" className="avatar" />
                                        <div className="info">
                                            <span><UserAddOutlined /> Thêm</span>
                                            <p>164 thành viên</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div>
                                        <img src="https://blog.classdojo.com/static/c2bc84a245fb0be103e6f08e43131f6b/beee3970-c013-4a99-8d09-ac7474bce925.png" className="avatar" />
                                        <div className="info">
                                            <p>Nhóm 4</p>
                                            <p>16 thành viên</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div>
                                        <img src="https://blog.classdojo.com/static/c2bc84a245fb0be103e6f08e43131f6b/beee3970-c013-4a99-8d09-ac7474bce925.png" className="avatar" />
                                        <div className="info">
                                            <p>Nhóm 5</p>
                                            <p>4 thành viên</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item add">
                                    <div>
                                        <div>
                                            <PlusOutlined />
                                            <p>Thêm nhóm</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPane>
                    </Tabs>
                </div>
                </Content>
                <Drawer
                    width={600}
                    placement="right"
                    closable={false}
                    onClose={onClose}
                    visible={visible}
                    className="student-draw"
                >
                    <div>
                        <div className="student-info">
                            <img src="https://aphoto.vn/wp-content/uploads/2019/07/top-anh-chan-dung-aphoto-tuan-2-thang-70.jpg" className="student-thumb" />
                            <div>
                                <h3>Nguyễn Ngọc Tường An</h3>
                                <p>Ngày sinh: 27/01/1989</p>
                                <p>Nơi ở: Văn Quán, Hà Đông, Hà Nội</p>
                                <p>SĐT: 0982746271</p>
                                <p>Email: nguyenducdinh2701@gmail.com</p>
                                <p>Sở thích: Du lịch, ăn uống, hát hò, cầu lông</p>
                            </div>
                        </div>
                        <div className="student-message">
                            <h3>Thông báo <span>(Thông báo sẽ được gửi đến học viên qua Email và nút chuông)</span></h3>
                            <div>
                                <TextArea rows={4} placeholder="Nội dung thông báo">

                                </TextArea>
                                <Button  type="primary">Gửi</Button>
                            </div>
                        </div>
                    </div>
                </Drawer>

                <Drawer
                    width={600}
                    placement="right"
                    closable={false}
                    onClose={groupOnClose}
                    visible={groupVisible}
                    className="group-student-draw"
                >
                    <div>
                        <div className="group-student-info">
                            {/* <img src="https://blog.classdojo.com/static/c2bc84a245fb0be103e6f08e43131f6b/beee3970-c013-4a99-8d09-ac7474bce925.png" className="student-thumb" /> */}
                            <div>
                                <h3>Nhóm chưa làm bài tập</h3>
                                <p>(20 thành viên) </p>
                                <p onClick={() => {setGroupVisibleEdit(true)}}><UserAddOutlined /> Thành viên</p>
                            </div>
                        </div>
                        <div className="student-message">
                            <h3>Thông báo nhóm <span>(Thông báo sẽ được gửi đến từng thành viên qua Email và nút chuông)</span></h3>
                            <div>
                                <TextArea rows={4} placeholder="Nội dung thông báo">

                                </TextArea>
                                <Button  type="primary">Gửi</Button>
                            </div>
                        </div>
                        <Drawer
                            width={400}
                            closable={false}
                            onClose={onGroupStudentClose}
                            visible={groupVisibleEdit}
                            className="group-student-draw-edit"
                        >
                            <div className="student-in-group">
                                <h1>Nhóm 1: 20 thành viên</h1>
                                <div className="filter">
                                    <Input.Search allowClear placeholder="Tìm kiếm theo tên học viên" />
                                </div>
                                <ul>
                                    <li className="in-current-group">
                                        <span> <img src="http://trainingcenter.fweb.vn//images/img2.png" />Phạm Thiên An</span>
                                        <span><DeleteOutlined /> Xóa</span>
                                    </li>
                                    <li className="in-other-group">
                                        <span> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfWDeZCnnLqR6obDRneAb9iBMpu7F1aDTTaA&usqp=CAU" />Trần Ngọc Bảo</span>
                                        <span><UserAddOutlined /> Thêm</span>
                                    </li>
                                    <li>
                                        <span> <img src="https://www.seekpng.com/png/detail/646-6469674_blue-class-dojo-avatar.png" />Hoàng Phúc Nguyên Chương</span>
                                        <span><UserAddOutlined /> Thêm</span>
                                    </li>
                                    <li className="in-other-group">
                                        <span> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-eU2WpPViXIhw1_1uBSA4iJfaMYPKmtK5nA&usqp=CAU" />Nguyễn Thanh Danh</span>
                                        <span><UserAddOutlined /> Thêm</span>
                                    </li>
                                    <li className="in-other-group">
                                        <span> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQoCjzjatJE1ajjYFPg58nu0UsI3zM8G-voA&usqp=CAU" />Nguyễn Trần Quốc Duy</span>
                                        <span><UserAddOutlined /> Thêm</span>
                                    </li>
                                    <li className="in-other-group">
                                        <span> <img src="https://spng.pngfind.com/pngs/s/594-5940550_class-dojo-clipart-brown-monster-orange-class-dojo.png" />Phan Đức Thanh Duy</span>
                                        <span><UserAddOutlined /> Thêm</span>
                                    </li>
                                    <li className="in-current-group">
                                        <span> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgrWmJKNAHGAm8hEqdu6VUu7K-2PZmNqO0Ool4u2tL2rBw2Ise3g1u7069Ow39TyRrbGc&usqp=CAU" />Trần Đình Hưng</span>
                                        <span><DeleteOutlined /> Xóa</span>
                                    </li>
                                    <li className="in-current-group">
                                        <span> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBIiz-OZFudjONjeg5aiMlNf3KlkPckOyoKHX3cvfK_-nX35Vsx6299e44tHEmGl2jqO8&usqp=CAU" />Trần Kiên Hưng</span>
                                        <span><DeleteOutlined /> Xóa</span>
                                    </li>
                                    <li className="in-current-group">
                                        <span> <img src="http://trainingcenter.fweb.vn//images/img2.png" />Hứa Tuấn Hữu</span>
                                        <span><DeleteOutlined /> Xóa</span>
                                    </li>
                                    <li>
                                        <span> <img src="http://trainingcenter.fweb.vn//images/img2.png" />Hà Đình Đức Huy</span>
                                        <span><UserAddOutlined /> Thêm</span>
                                    </li>
                                    <li>
                                        <span> <img src="https://www.clipartmax.com/png/small/12-128404_classdojo-monster-0-classdojo-pinterest-class-dojo-monsters-orange.png" />Bùi Hứa Xuân Huy</span>
                                        <span><UserAddOutlined /> Thêm</span>
                                    </li>
                                    <li>
                                        <span> <img src="http://trainingcenter.fweb.vn//images/img2.png" />Đặng Lê Quốc Khang</span>
                                        <span><UserAddOutlined /> Thêm</span>
                                    </li>
                                    <li>
                                        <span> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5S3yWJng2aLpHxTV9t-FkmLyJkcOtJkQS9YdcPZNQQJuYPVQyMjAt0kG-Z4l4IcNXmno&usqp=CAU" />Phạm Đức Quốc Khánh</span>
                                        <span><UserAddOutlined /> Thêm</span>
                                    </li>
                                    <li className="in-current-group">
                                        <span> <img src="http://trainingcenter.fweb.vn//images/img2.png" />Phạm Thiên An</span>
                                        <span><DeleteOutlined /> Xóa</span>
                                    </li>
                                    <li className="in-other-group">
                                        <span> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfWDeZCnnLqR6obDRneAb9iBMpu7F1aDTTaA&usqp=CAU" />Trần Ngọc Bảo</span>
                                        <span><UserAddOutlined /> Thêm</span>
                                    </li>
                                    <li>
                                        <span> <img src="https://www.seekpng.com/png/detail/646-6469674_blue-class-dojo-avatar.png" />Hoàng Nguyễn Phúc Nguyên Chương</span>
                                        <span><UserAddOutlined /> Thêm</span>
                                    </li>
                                    <li className="in-other-group">
                                        <span> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-eU2WpPViXIhw1_1uBSA4iJfaMYPKmtK5nA&usqp=CAU" />Nguyễn Thanh Danh</span>
                                        <span><UserAddOutlined /> Thêm</span>
                                    </li>
                                    <li className="in-other-group">
                                        <span> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQoCjzjatJE1ajjYFPg58nu0UsI3zM8G-voA&usqp=CAU" />Nguyễn Trần Quốc Duy</span>
                                        <span><UserAddOutlined /> Thêm</span>
                                    </li>
                                    <li className="in-other-group">
                                        <span> <img src="https://spng.pngfind.com/pngs/s/594-5940550_class-dojo-clipart-brown-monster-orange-class-dojo.png" />Phan Đức Thanh Duy</span>
                                        <span><UserAddOutlined /> Thêm</span>
                                    </li>
                                    <li className="in-current-group">
                                        <span> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgrWmJKNAHGAm8hEqdu6VUu7K-2PZmNqO0Ool4u2tL2rBw2Ise3g1u7069Ow39TyRrbGc&usqp=CAU" />Trần Đình Hưng</span>
                                        <span><DeleteOutlined /> Xóa</span>
                                    </li>
                                    <li className="in-current-group">
                                        <span> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBIiz-OZFudjONjeg5aiMlNf3KlkPckOyoKHX3cvfK_-nX35Vsx6299e44tHEmGl2jqO8&usqp=CAU" />Trần Kiên Hưng</span>
                                        <span><DeleteOutlined /> Xóa</span>
                                    </li>
                                    <li className="in-current-group">
                                        <span> <img src="http://trainingcenter.fweb.vn//images/img2.png" />Hứa Tuấn Hữu</span>
                                        <span><DeleteOutlined /> Xóa</span>
                                    </li>
                                    <li>
                                        <span> <img src="http://trainingcenter.fweb.vn//images/img2.png" />Hà Đình Đức Huy</span>
                                        <span><UserAddOutlined /> Thêm</span>
                                    </li>
                                    <li>
                                        <span> <img src="https://www.clipartmax.com/png/small/12-128404_classdojo-monster-0-classdojo-pinterest-class-dojo-monsters-orange.png" />Bùi Hứa Xuân Huy</span>
                                        <span><UserAddOutlined /> Thêm</span>
                                    </li>
                                    <li>
                                        <span> <img src="http://trainingcenter.fweb.vn//images/img2.png" />Đặng Lê Quốc Khang</span>
                                        <span><UserAddOutlined /> Thêm</span>
                                    </li>
                                    <li>
                                        <span> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5S3yWJng2aLpHxTV9t-FkmLyJkcOtJkQS9YdcPZNQQJuYPVQyMjAt0kG-Z4l4IcNXmno&usqp=CAU" />Phạm Đức Quốc Khánh</span>
                                        <span><UserAddOutlined /> Thêm</span>
                                    </li>
                                    <li className="in-current-group">
                                        <span> <img src="http://trainingcenter.fweb.vn//images/img2.png" />Phạm Thiên An</span>
                                        <span><DeleteOutlined /> Xóa</span>
                                    </li>
                                    <li className="in-other-group">
                                        <span> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfWDeZCnnLqR6obDRneAb9iBMpu7F1aDTTaA&usqp=CAU" />Trần Ngọc Bảo</span>
                                        <span><UserAddOutlined /> Thêm</span>
                                    </li>
                                    <li>
                                        <span> <img src="https://www.seekpng.com/png/detail/646-6469674_blue-class-dojo-avatar.png" />Hoàng Nguyễn Phúc Nguyên Chương</span>
                                        <span><UserAddOutlined /> Thêm</span>
                                    </li>
                                    <li className="in-other-group">
                                        <span> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-eU2WpPViXIhw1_1uBSA4iJfaMYPKmtK5nA&usqp=CAU" />Nguyễn Thanh Danh</span>
                                        <span><UserAddOutlined /> Thêm</span>
                                    </li>
                                    <li className="in-other-group">
                                        <span> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQoCjzjatJE1ajjYFPg58nu0UsI3zM8G-voA&usqp=CAU" />Nguyễn Trần Quốc Duy</span>
                                        <span><UserAddOutlined /> Thêm</span>
                                    </li>
                                    <li className="in-other-group">
                                        <span> <img src="https://spng.pngfind.com/pngs/s/594-5940550_class-dojo-clipart-brown-monster-orange-class-dojo.png" />Phan Đức Thanh Duy</span>
                                        <span><UserAddOutlined /> Thêm</span>
                                    </li>
                                    <li className="in-current-group">
                                        <span> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgrWmJKNAHGAm8hEqdu6VUu7K-2PZmNqO0Ool4u2tL2rBw2Ise3g1u7069Ow39TyRrbGc&usqp=CAU" />Trần Đình Hưng</span>
                                        <span><DeleteOutlined /> Xóa</span>
                                    </li>
                                    <li className="in-current-group">
                                        <span> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBIiz-OZFudjONjeg5aiMlNf3KlkPckOyoKHX3cvfK_-nX35Vsx6299e44tHEmGl2jqO8&usqp=CAU" />Trần Kiên Hưng</span>
                                        <span><DeleteOutlined /> Xóa</span>
                                    </li>
                                    <li className="in-current-group">
                                        <span> <img src="http://trainingcenter.fweb.vn//images/img2.png" />Hứa Tuấn Hữu</span>
                                        <span><DeleteOutlined /> Xóa</span>
                                    </li>
                                    <li>
                                        <span> <img src="http://trainingcenter.fweb.vn//images/img2.png" />Hà Đình Đức Huy</span>
                                        <span><UserAddOutlined /> Thêm</span>
                                    </li>
                                    <li>
                                        <span> <img src="https://www.clipartmax.com/png/small/12-128404_classdojo-monster-0-classdojo-pinterest-class-dojo-monsters-orange.png" />Bùi Hứa Xuân Huy</span>
                                        <span><UserAddOutlined /> Thêm</span>
                                    </li>
                                    <li>
                                        <span> <img src="http://trainingcenter.fweb.vn//images/img2.png" />Đặng Lê Quốc Khang</span>
                                        <span><UserAddOutlined /> Thêm</span>
                                    </li>
                                    <li>
                                        <span> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5S3yWJng2aLpHxTV9t-FkmLyJkcOtJkQS9YdcPZNQQJuYPVQyMjAt0kG-Z4l4IcNXmno&usqp=CAU" />Phạm Đức Quốc Khánh</span>
                                        <span><UserAddOutlined /> Thêm</span>
                                    </li>
                                </ul>
                            </div>
                        </Drawer>
                    </div>
                </Drawer>
        </LayoutDashboard>
    )
}