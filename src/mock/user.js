import Mock from 'mockjs'
import dataBox from './userPassword.js'


export default {
    //模拟用户登录
    login: config => {
        console.log(config)
        let data = JSON.parse(config.body);
        let userList = {};
        console.log('S',dataBox.data.data)
        let bel = dataBox.data.data.map(res => {
            //用户和dataBox比对
            if(data.username === res.username && data.password === res.password){
                userList = res.userlist;
                console.log('hey',res)
                return true
            }else{
                return false
            } 
        })
        console.log('123456',bel)
        if(bel.includes(true)){
            return {
                status: 200,
                message: '获取文章列表成功',
                data: {
                    userList: userList
                }
            }
        }else{
            return {
                code: -1,
                data: {
                    masg: "用户名或密码错误",
                    status: 'fail'
                }
            }
        }
        
    }
}