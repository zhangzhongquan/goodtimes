
import { Base } from "../../utils/base.js";
class Cart extends Base {
constructor(){
  super();
  this._StoragekeyName='cart'//定义购物车缓存key的name
}

  // 添加商品到购物车
add(item,counts){
  //接收缓存的购物车数据并赋值给cartData
  var cartData = this.getCartDataFromLocal();
  
  //接收商品是否在cartData中
  var isHasInfo = this._isHasThatOne(item.id,cartData);

    // 判断商品没有在缓存cartData中，是一个需要新添加的商品
  if (isHasInfo.index==-1){
    item.counts=counts;
    item.selectstatus=true;//购物车中的选中装态
    cartData.push(item)//将该商品添加到缓存
  }

  // 判断该商品在缓存cartData中，只需要添加商品个数
  else{
    cartData[isHasInfo.index].counts+=counts;
  }
//不管是缓存一个新商品到购物车，还是改变了购物车内已有商品的数量都需要更新购物车缓存
  wx.setStorageSync(this._StoragekeyName, cartData)
}



// ------------------------
//读取缓存数据并返回
getCartDataFromLocal(){
  // 获取购物车的缓存key
  var res=wx.getStorageSync(this._StoragekeyName);
  if(!res){

    // 如果没有缓存返回一个空数组
    res=[];
  }

  // 返回获取缓存的值
  return res;
}
//flag为true时考虑商品装态
// 获取缓存中所有商品用户选择的个数counts
getCartTotalCounts(flag){
    var data=this.getCartDataFromLocal();
    var counts=0;
    for(let i=0;i<data.length;i++){
      if(flag){
        if (data[i].selectstatus){
          counts += data[i].counts
        }
      }
      else{
        counts += data[i].counts
      }
     
    }
    return counts;
}

// --------------------------
// 判断要添加的商品是否在缓存的购物内
//id是商品的id,arr是购物车缓存数据
_isHasThatOne(id,arr){
  var itemtemp,ressult={index:-1};

  // 循环cartData,并将数组中的对象赋给item
  for(let i=0;i<arr.length;i++){
    itemtemp=arr[i];
    // 判断传来的商品id是否在对象中，在的话就将该对象在数组中的下标赋值给index,将对象数据赋给data
    if(itemtemp.id==id){
      ressult={
        index:i,
      
      };
      break;
    };
  };
  return ressult; 
}


}

export {Cart};