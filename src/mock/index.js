import Mock from 'mockjs'
// process.env.NODE_ENV === "development" ? Vue.use(Mock) : null
import userAPI from './user.js'

//设置全局延时，没有延时的话有时候会检测不到数据变化，建议保留
Mock.setup({
    timeout: '300-600'
})

Mock.mock(/\/user\/login/,'post', userAPI.login)

export default Mock