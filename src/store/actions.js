import { getMusicInfo, getMusicDateInfo } from '@/network/home'

export default {
    // 根据id获取音乐的详情和音源
    musicplay(context, payload) {
        let songObj = {}
        getMusicInfo(payload).then(res => {
            // console.log(res)
            songObj.id = payload
            songObj.url = res.data[0].url
            context.commit('musicplay', songObj)
        })
        getMusicDateInfo(payload).then(res => {
            // console.log(res);
            songObj.name = res.songs[0].name
            songObj.author = res.songs[0].ar[0].name
            songObj.picUrl = res.songs[0].al.picUrl
            songObj.dt = res.songs[0].dt
            context.commit('musicplayInfo', songObj)
        })
    }
}