import {request} from './request'
export function  getHomeData() {
    return request(
        {
            url:'/home/multidata'
        }
    )
}
export function getGoodsData(type,page) {
    return request(
        {
            url: '/home/data',
            params:{
                type,
                page
            }
        }
    )
}
export function getCartData() {
    return request(
        {
            url: '/category'
        }
    )
}
export function getSubCartData(maitKey) {
    return request(
        {
            url: '/subcategory',
            params:{
                maitKey
            }
        }
    )
}