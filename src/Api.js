import axios from 'axios'

const apiDomain = process.env.REACT_APP_API
let configAxios = {
    baseURL: apiDomain,
    headers: {
        "Content-Type": "multipart/form-data"
    }
};
let axiosInstance = axios.create(configAxios);

const getCourseComing = async (payload = {}) => {
    let fd = new FormData();
    fd.append('is_teacher',1)
    fd.append('items_per_page',-1)
    fd.append('_sand_expand','scheduled')
    fd.append('_sand_ajax',1)
    fd.append('_sand_platform',3)
    fd.append('_sand_domain','hth')
    fd.append('_sand_readmin',1)
    fd.append('_sand_is_wan',false)
    fd.append('_sand_token','7a384_yTmQj')
    fd.append('_sand_uiid',267365)
    fd.append('_sand_uid','5eeae94062f9a8551863e1f4')
    try{
        const res = await axiosInstance.post(
            `/session/search`, fd
        )
        if(!res?.data.success){
            throw 'loi he thong'
        }
        console.log('res?.data', res?.data)
        return res?.data
    }catch (e) {
        throw e
    }
}

export {
    getCourseComing
}
