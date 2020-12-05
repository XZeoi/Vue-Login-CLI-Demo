import Mock from 'mockjs'
import dataBox from './userPassword.js'


export default {
    //模拟用户登录
    login: config => {
        let data = Json.parse(config.body);
        let userList = {};
        let bel = dataBox.data.data.map(res => {
            //用户和dataBox比对
            if(data.username === res.username && data.password === res.password){
                userList = res.userList;
                return true
            }else{
                return false
            } 
        })
        if(bel.includes(true)){

        }else{
            return {
                code: -1,
                data: {
                    masg: "用户名或密码错误",
                    status: 'fail'
                }
            }
        }
        return {
            code: 200,
            data: {
                userList: userList
            }
        }
    }
}