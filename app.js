// app.js
App({
  onLaunch() {
    console.log("+++ onLaunch触发 +++", this.globalData.message)
  },
  globalData: {
    message: "测试信息"
  }
})
