

import {Theme} from 'theme-model.js';
var theme=new Theme();
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
    var id = options.id;
    
    var name = options.name;
    this.data.id = id;
    this._loadData()
  },


// 获取theme详情页面
  _loadData:function(){
    theme.getThemeData(this.data.id,(res) => {
      this.setData({
        "themeInfo":res
      })
      
    });
  },
 

  onProductItemTap: function (event) {
    var id = event.currentTarget.dataset.id;

    wx.navigateTo({
      url: '../product/product?id=' + id
    });
  },
})