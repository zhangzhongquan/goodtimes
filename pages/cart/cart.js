// pages/cart/cart.js
import { Cart } from 'cart-model.js';
var cart = new Cart();
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
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // cart页面需要绑定的数据进行绑定
    var cartData = this.getCartDataFromLocal();
    var countsInfo = this.getCartTotalCounts(true)
    this.setData({
      selectedCounts: countsInfo,
      cartData:cartData
    })
  },
// 计算商品的总价格，商品选中的总个数，商品种类的个数
_calcTotalAccountAndCounts:function(data){
  var len=data.length,
      // 选中商品的总价格（不包含未选中的商品）
      account=0,
      // 选中商品的总个数
      selectedCounts=0,

      // 选中商品种类的个数
      selectedTypeCounts=0;

  // multiple的作用是为了避免浮点数计算的时候出现误差
    let multiple=100;
    for(let i=0;i<data.length;i++){
      item=data[i];
      if (item[i].selectstatus){
        account += data[i].price * multiple * data[i].counts*multiple;
        selectedCounts+=data[i].counts;
        selectedTypeCounts++;
      }
    }
    
    return {
      selectedTypeCounts: selectedTypeCounts,
      account: account / (multiple * multiple),
      selectedCounts: selectedCounts

    };
}

})