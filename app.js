App({
  onLaunch() {
    // 引入 SDK
    require('./utils/sdk-v1.3.0.js')

    // 初始化 SDK
    let clientID = "a783213c07549d5d0704"
    wx.BaaS.init(clientID)

  


  }


})