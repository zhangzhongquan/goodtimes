//引入base.js调用封装的请求函数
import {Base} from "../../utils/base.js";

//引入config.js在该页面为了引入端口
import {Config} from "../../utils/config.js"

//创建Home类并继承Base类
class Home extends Base{
  constructor(){
    super();
  }


// ---------------------------------------------------------------
//该函数定义了base中request请求函数的参数及回调函数，请求banner的值
  getBanner(callBack){
//获取banner接口
    var Interface = Config.banner
   var params={
     url: Interface,
     //执行回调函数
     sCallBack:function(res){
          callBack&&callBack(res.data);
     }
   };
//调用请求函数
   this.request(params);
  }


// -------------------------------------
/*请求theme主题数据*/
  getTheme(callBack) {
    //获取theme接口
    var Interface1= Config.theme
    var params1 = {
      url: Interface1,
      //执行回调函数
      sCallBack: function (res) {
        callBack && callBack(res.data);
      }
    };
    //调用请求函数
    this.request(params1);
  }

// -----------------------------------------------------
  // 请求products数据
  getProducts(callBack) {
    //获取products接口
    var Interface2 = Config.products
    var params2 = {
      url: Interface2,
      //执行回调函数
      sCallBack: function (res) {
        callBack && callBack(res.data);
      }
    };
    //调用请求函数
    this.request(params2);
  }


}

export {Home};