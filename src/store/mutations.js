export default {
    // 获取音源
    musicplay(state, payload) {
        state.song.id = payload.id
        state.song.url = payload.url
    },
    // 获取歌曲详情
    musicplayInfo(state, payload) {
        state.song.author = payload.author
        state.song.name = payload.name
        state.song.dt = payload.dt
    },
    // 获取播放按钮的状态，当用户点击时取反
    musicActive(state, payload) {
        // state.song.isPlay = !payload
        // console.log('改变后的状态' + state.song.isPlay);
    },
    // 实时获取当前播放秒数
    setCurrentTime(state, plyload) {
        state.song.currentTime = Number(plyload).toFixed(2)
    }
}