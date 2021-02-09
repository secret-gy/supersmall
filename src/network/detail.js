import {request} from './request'

export function getTopImg(iid){
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}