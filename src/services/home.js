import axiosService from "../utils/request";

export const getData = async (params = {}) => {
    return await axiosService('get', '/data')
}