import { request } from './request'
// 获取歌词页面的所有请求
export function getLyricInfo(id) {
    return request({
        url: '/lyric',
        params: { id }
    })
}