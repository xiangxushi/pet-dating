// pages/component/map.js

const map = require('../../../utils/map.js')

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    markers:{
      type:Array,
    },
    hight:{
      type:Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    scale: 16,
    Height:'300rpx'
  },
  /**
   * 生命周期函数
   */
  pageLifetimes:{
    show:function(){
      var _this = this
      map.getLocation().then(res => {
        _this.setData({
          longitude: res.longitude,
          latitude: res.latitude
        })
      })
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    dingwei: function () {
      let _this = this
      map.getLocation().then(res => {
        console.log(res)
        _this.setData({
          longitude: res.longitude,
          latitude: res.latitude
        }
        )
      })
    },
  }
})
