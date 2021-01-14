import { Block, View } from '@tarojs/components'
import React from 'react'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import './index.scss'
// index.js
// 获取应用实例
const app = Taro.getApp()

@withWeapp({
  data: {
    motto: 'Hello World',
    message: app.globalData.message
  },
  onLoad() {
    console.log(app.globalData.message)
  }
})
class _C extends React.Component {
  render() {
    const { motto, message } = this.data
    return (
      <View className="container">
        <View className="usermotto">
          <View className="user-motto">{motto}</View>
          <View className="user-motto">{message}</View>
        </View>
      </View>
    )
  }
}

export default _C
