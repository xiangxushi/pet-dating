// pages/component/home/liebiao1.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    funjinlist: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  pageLifetimes: {
    // 组件所在页面的生命周期函数
    show: function () { 
      console.log('fulist')
    },
    hide: function () { },
    resize: function () { },
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
