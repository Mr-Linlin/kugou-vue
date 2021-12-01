import { request } from './request'

// 传入资源类型和资源 id,以及排序方式,可获取对应资源的评论
export function getCommentsMusic(type, id, sortType, pageNo) {
    return request({
        url: '/comment/new',
        params: { type, id, sortType, pageNo }
    })
}