import { Block } from "@tarojs/components";
import React from "react";
import Taro from "@tarojs/taro";
import withWeapp from "@tarojs/with-weapp";
import "./app.scss";

@withWeapp({
  onLaunch() {
    console.log("+++ onLaunch触发 +++", this.globalData.message);
  },
  globalData: {
    message: "测试信息"
  }
}, true)
class App extends React.Component {
  render() {
    return this.props.children;
  }

} // app.js


export default App;