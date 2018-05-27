import { Product } from 'product-model.js';
var product = new Product();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    countsArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    productCount:1,
    tabsArray:['商品详情','产品参数','售后保障'],
    currentTabsIndex:0
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id;
    this.data.id = id;

    this._loadData();

  },


  _loadData: function () {
    //获取banner的响应数据
    product.getDetailInfo(this.data.id, (res) => {
      console.log(res)
      this.setData({
        "bannerInfo": res
      });
    });
  },


// 获取用户选择的商品个数
  bindPickerChange: function (event) {
    var index = event.detail.value;
    var selectedCount = this.data.countsArray[index];
    this.setData({
      "productCount": selectedCount
    });
  },


  onTabsItemTap:function(event){
    var index = event.currentTarget.dataset.index;
    this.setData({
      currentTabsIndex:index
    })
   
  }



})