// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    message: app.globalData.message
  },
  onLoad() {
    console.log(app.globalData.message)
  }
})
