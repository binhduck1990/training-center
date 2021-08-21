import axios from 'axios'

const apiDomain = process.env.REACT_APP_API
let configAxios = {
    baseURL: apiDomain,
    headers: {
        "Content-Type": "multipart/form-data"
    }
};
let axiosInstance = axios.create(configAxios);

const apiGetListCourseOver = async (payload = {}) => {
    let fd = new FormData();
    fd.append('is_teacher',1)
    fd.append('items_per_page',5)
    fd.append('_sand_expand','scheduled')
    fd.append('_sand_ajax',1)
    fd.append('_sand_platform',3)
    fd.append('_sand_domain','imard')
    fd.append('_sand_readmin',1)
    fd.append('_sand_is_wan',false)
    fd.append('_sand_token','7a384_I864p')
    fd.append('_sand_uiid',267365)
    fd.append('_sand_uid','5ed85dbcda049d22da692fc4')
    try{
        const res = await axiosInstance.post(
            `/session/search`, fd
        )
        if(!res?.data.success){
            throw 'loi he thong'
        }
        return res?.data
    }catch (e) {
        throw e
    }
}

const apiGetCourseOver = async (payload = {}) => {
    let fd = new FormData();
    fd.append('is_teacher',1)
    fd.append('items_per_page',5)
    fd.append('_sand_expand','scheduled')
    fd.append('_sand_ajax',1)
    fd.append('_sand_platform',3)
    fd.append('_sand_domain','imard')
    fd.append('_sand_readmin',1)
    fd.append('_sand_is_wan',false)
    fd.append('_sand_token','7a384_I864p')
    fd.append('_sand_uiid',267365)
    fd.append('_sand_uid','5ed85dbcda049d22da692fc4')
    fd.append('session_status',1)
    try{
        const res = await axiosInstance.post(
            `/session/search`, fd
        )
        if(!res?.data.success){
            throw 'loi he thong'
        }
        return res?.data
    }catch (e) {
        throw e
    }
}

const apiGetLinkLha = async (payload = {}) => {
    let fd = new FormData();
    fd.append('is_teacher',1)
    fd.append('is_app',1)
    fd.append('_sand_ajax',1)
    fd.append('_sand_platform',3)
    fd.append('_sand_domain','imard')
    fd.append('_sand_readmin',1)
    fd.append('_sand_is_wan',false)
    fd.append('_sand_token','7a384_I864p')
    fd.append('_sand_uiid',267365)
    fd.append('_sand_uid','5ed85dbcda049d22da692fc4')
    fd.append('session_iid',payload.session_iid)
    try{
        const res = await axiosInstance.post(
            `/session/api/join-virtual-class`, fd
        )
        if(!res?.data.success){
            throw 'loi he thong'
        }
        return res?.data
    }catch (e) {
        throw e
    }
}

export {
    apiGetListCourseOver,
    apiGetCourseOver,
    apiGetLinkLha
}
