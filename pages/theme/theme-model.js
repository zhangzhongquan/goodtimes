//引入base.js调用封装的请求函数
import { Base } from "../../utils/base.js";

//引入config.js在该页面为了引入端口
import { Config } from "../../utils/config.js"

//创建Theme类并继承Base类
class Theme extends Base {
  constructor() {
    super();
  }
  getThemeData(id,callBack) {
    //获取theme接口
    var Interface1 = Config.theme;
    var params1 = {
      url: Interface1 + "?id=" + id,
      
      //执行回调函数
      sCallBack: function (res) {
        callBack && callBack(res.data);
      }
    };
    //调用请求函数
    this.request(params1);
  }



}

export {Theme};