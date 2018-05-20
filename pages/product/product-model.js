import { Base } from "../../utils/base.js";

//引入config.js在该页面为了引入端口
import { Config } from "../../utils/config.js"

//创建Product类并继承Base类
class Product extends Base {
  constructor() {
    super();
  }
  getDetailInfo(id, callBack) {
    //获取detail接口
    var Interface = Config.banner;
    var params = {
      url: Interface + "?id=" + id,

      //执行回调函数
      sCallBack: function (res) {
        callBack && callBack(res.data);
      }
    };
    //调用请求函数
    this.request(params);
  }



}

export { Product };

