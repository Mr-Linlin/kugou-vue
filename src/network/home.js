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