import { Product } from 'product-model.js';
var product = new Product();
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var id=options.id;
      this.data.id=id;
     
      this._loadData();
     
  },


  _loadData: function () {
    //获取banner的响应数据
    product.getDetailInfo(this.data.id,(res) => {
    
      this.setData({
        "bannerInfo": res
      });
    });
  }
  


})