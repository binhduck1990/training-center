import axios from 'axios'
import {notification} from 'antd'

const apiDomain = process.env.REACT_APP_API
const handleError = (error, history) => {
    if(error?.response?.status === 401){
        localStorage.removeItem('token')
        history.replace('/login')
    }else if(error?.response?.status === 404){
        history.replace('/404')
    }else if(error?.response?.status === 500){
        history.replace('/500')
    }else if(error?.response?.status === 400 || error?.response?.status === 403){
        let message = error.response.data.message
        notification['error']({
            message: message
        })
    }else{
        notification['error']({
            message: 'Có lỗi trong quá trình xử lý'
        })
    }
}
const login = async (payload, cb_success = null, cb_error = null) => {
    try{
        const res = await axios.post(
            `${apiDomain}/user/login`, {
                lname: payload.username,
                pass: payload.password,
                submit:1,
                _sand_ajax:1,
                _sand_platform:3,
                _sand_readmin:1,
                _sand_domain:'hth',
                _sand_is_wan:false
            }
        )
        if(typeof(cb_success) == 'function'){
            cb_success(res)
        }
    }catch (e) {
        if(typeof(cb_error) == 'function'){
            cb_error(e)
        }
    }
}

export {
    handleError,
    login
}
