import {notification} from "antd";

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

const domain = () => {
    return process.env.REACT_APP_DOMAIN
}

export {
    handleError,
    domain
}
