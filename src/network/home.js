// 处理首页的网络请求
import { request } from "./request";

// 获取首页数据
export function getHomeData() {
    return request({
        url: "/homepage/block/page"
    })
}
// 获取APP首页圆形图标入口列表
export function getBall() {
    return request({
        url: "/homepage/dragon/ball"
    })
}
// 获取首页播放歌曲音源
export function getMusicInfo(id) {
    return request({
        url: '/song/url',
        params: { id: id }
    })
}
// 获取首页播放歌曲的详情
export function getMusicDateInfo(ids) {
    return request({
        url: '/song/detail',
        params: { ids: ids }
    })
}

// 封装一个标题类
export class TitleInfo {
    constructor(uiElement) {
        this.text = uiElement.button.text
        this.title = uiElement.subTitle.title
    }
}

// 封装一个歌单日历类
export class CalendarInfo {
    constructor(resourceExtInfo, uiElement) {
        this.imgUrl = uiElement.image.imageUrl
        this.tags = resourceExtInfo.tags
        this.title = uiElement.mainTitle.title
        this.time = resourceExtInfo.startTime
        this.playCount = resourceExtInfo.playCount
            // this.subTitle = uiElement.subTitle.title
    }
}