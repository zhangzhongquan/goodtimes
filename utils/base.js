//引用域名和接口封装类
import {Config} from '../utils/config.js';

//请求类的封装
class Base {
  constructor() {
    
  }
    
  //封装数据请求
  request(params) {
    
     //服务器公用地址
    var baseRequestUrl = Config.resUrl ;
    //封装url
    var url = baseRequestUrl+params.url;

//判断是否给了get或post方法，如果没给就给get方法
    if(!params.type){
      params.type="GET"
    }
    //获取/存储数据
    wx.request({
      url: url,
      data: 'params.data',//获取时携带的参数
      header: {
        'content-type': 'application/json',
        //在缓存中获取token
        'token': wx.getStorageSync('token')
      },
      //定义https传输方法
      method: params.type,

      //请求成功后
      success: function (res) { 

        //回调函数必须存在才调用回调函数
        params.sCallBack&& params.sCallBack(res)
      },

      //请求失败后
      fail: function (res) {
        console.log("请求失败")
       }
      
    })
  }

}

export {Base};