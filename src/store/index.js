import { createStore } from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const state = {
    song: {
        id: 1430583016,
        url: 'http://m701.music.126.net/20211124170429/0e57dc42e7db986aad2259f47b05839d/jdymusic/obj/w5zDlMODwrDDiGjCn8Ky/1682377598/cf45/a902/f89d/404b4307336ce2cb7924d278e67c3adf.mp3',
        picUrl: 'https://p2.music.126.net/YRFYXG6YaJfTyy_mQntS4A==/109951164799337803.jpg',
        name: '海底',
        author: '一支榴莲',
        isPlay: true
    }
}
export default createStore({
    state,
    mutations,
    actions,
    modules: {},
    getters
})