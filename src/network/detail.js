import { request } from './request'
export function getDetail(iid) {
    return request(
        {
            url: '/detail',
            params:{
                iid
            }
        }
    )
}

export class goods{
    constructor(itemInfo, columns, services ){
        this.title=itemInfo.title
        this.desc=itemInfo.desc
        this.newPrice=itemInfo.price
        this.oldPrice = itemInfo.oldPrice;
        this.discountDesc = itemInfo.discountDesc;
        this.columns = columns;
        this.services = services;
        this.lowNowPrice = itemInfo.lowNowPrice
    }
}
export class shop{
    constructor(shopInfo){
        this.logo=shopInfo.shopLogo
        this.name=shopInfo.name
        this.fans=shopInfo.cFans
        this.sells=shopInfo.cSells
        this.score=shopInfo.score
        this.goodsCount=shopInfo.cGoods
    }
}
export class goodsParams {
    constructor(info,rule) {
     this.image=info.images?info.image[0]:''
     this.infos=info.set
     this.sizes=rule.tables
    }
}