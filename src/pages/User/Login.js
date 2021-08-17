import {Form, Input, Button, Checkbox, notification} from 'antd'
import {useHistory, useLocation} from 'react-router-dom'
import {handleError, login} from '../../Api'
import '../../css/loginForm.css'

export function Login() {
    const domain = process.env.REACT_APP_DOMAIN
    let history = useHistory()
    let location = useLocation()
    const [form] = Form.useForm()
    const username = localStorage.getItem('username')
    if(username){
        form.setFieldsValue({username})
    }

    const onFinish = (values) => {
        let { from } = location.state || { from: { pathname: '/' } }
        login(values, (res) => {
            notification['success']({
                message: res.data.message
            })
            if(values.remember){
                localStorage.setItem('username', values.username)
            }else{
                localStorage.removeItem('username')
            }
            history.replace(from)
        }, (error) => {
            handleError(error, history)
        })
    }

    return (
        <div className="page-login" style={{
            backgroundImage: `url(${domain}/images/main-background1.jpg)`
        }}>
            <div>
                <h1 className="main-title">Đăng nhập</h1>
                <Form
                    form={form}
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <div>
                            <label>Username</label>
                            <Input />
                        </div>
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <div>
                            <label>Password</label>
                            <Input.Password />
                        </div>
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked" >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
