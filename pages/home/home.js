// pages/home/home.js
import { Home } from 'home-model.js';
var home = new Home();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      bannerArr:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // 在页面加载时调用数据
    this._loadData()
  },


  // 数据获取
  _loadData: function () {
    //获取banner的响应数据
   home.getBanner((res) => {
    
      this.setData({
          "bannerArr":res
      });
    });

    //获取theme主题的响应数据
    home.getTheme((res) => {
      
      this.setData({
        "themeArr": res
      });
    });

    // 获取products的响应数据
    home.getProducts((res) => {
      this.setData({
        productsArr: res
      });
    });

  },


   // 绑定跳转到商品详情页面
  onProductItemTap: function(event){
    var id=event.currentTarget.dataset.id;
   
    wx.navigateTo({
      url: '../product/product?id='+id
    });
  },

// 绑定跳转到主题页面
onThemeItemTap: function(event){
  var name = event.currentTarget.dataset.name;
  
  var id = event.currentTarget.dataset.id;
  wx.navigateTo({
    url: '../theme/theme?id=' + id +'&name='+name
  });
},

})