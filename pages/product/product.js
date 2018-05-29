import { Product } from 'product-model.js';
import {Cart} from '../cart/cart-model.js';
var cart = new Cart();
var product = new Product();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    countsArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    productCount:1,
    tabsArray:['商品详情','产品参数','售后保障'],
    currentTabsIndex:0,
    CartTotalCounts:''
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
        CartTotalCounts: cart.getCartTotalCounts(),
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

// 获取选项卡的索引，便于绑定class
  onTabsItemTap:function(event){
    var index = event.currentTarget.dataset.index;
    this.setData({
      currentTabsIndex:index
    })
  },

// 出发该事件添加购物车
  onAddingToCartTap: function (event) {
    this.addToCart();
    var counts = this.data.productCount +this.data.CartTotalCounts;
    this.setData({
      CartTotalCounts:counts
    })
  },

// 该函数是为了获取需要缓存的数据或者需要在缓存中寻找的数据
  addToCart: function () {
    var tempObj = {};
    var keys = [,'name', 'imgUrl', 'price','counts'];
    for (var key in this.data.bannerInfo) {
      if (keys.indexOf(key)) {
        tempObj[key] = this.data.bannerInfo[key]
      }
    }
    // 调用添加购物车函数对购物车缓存的数据做改变
    cart.add(tempObj, this.data.productCount)
  }





})