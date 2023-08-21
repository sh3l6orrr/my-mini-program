Page({
  data: {
    motto: '嗨👋，这是Jin的Demo小程序，用于演示小程序的基本功能。上面是你的微信登陆信息。'
  },
  onLoad() {},
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs',
    })
  }
})
