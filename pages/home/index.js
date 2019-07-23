// pages/home/index.js


const map = require('./../../utils/map.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // longitude,
    // latitude,
    nav1: 1,
    nav3:1,
    nav2:4,
    markers:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this
    wx.getSystemInfo({
      success: function (res) {
        //设置map高度，根据当前设备宽高满屏显示
        _this.setData({
          view: {
            Height: res.windowHeight - 110
          }
        })
        console.log(res.windowHeight)
      }
    })
  },
  onShow:function(){
    let markers = [{
      label: {
        textAlign: 'center',
        content: '300km',
        fontSize: '24rpx'
      },
      id: 1,
      latitude: 39.9219,
      longitude: 116.44355,
      width: '100rpx',
      height: '100rpx',
      iconPath: '/images/touxiang.jpeg'
    },
    {
      id: 2,
      latitude: 35.90490,
      longitude: 116.40491,
      title: '300km',
      width: '100rpx',
      height: '100rpx',
      iconPath: '/images/touxiang.jpeg'
    },
    {
      id: 3,
      latitude: 38.90467,
      longitude: 116.40717,
      title: '300km',
      width: '100rpx',
      height: '100rpx',
      iconPath: '/images/touxiang.jpeg'
    }]
    this.setData({markers})

    let funjinlist = [
      {
        image:'/images/touxiang.jpeg',
        name:'小阳光',
        sex:'0', //女
        age:21,
        gap:'100米',
        time:'12分钟',
        chongwu:[
          {
            image: '/images/touxiang.jpeg',
            name: '小阳光',
          },
          {
            image: '/images/touxiang.jpeg',
            name: '小阳光',
          }
        ],
      },
      {
        image: '/images/touxiang.jpeg',
        name: '小阳光',
        sex: '0', //女
        age: 21,
        gap: '100米',
        time: '12分钟',
        chongwu: [],
        chongwulen: 0
      }
    ]
    this.setData({funjinlist})

    let yueliulist = [
      {
        add:'朝阳公园',
        time:'今天（13：30-15：30）',
        static:'1',
        images:[
          '/images/touxiang.jpeg',
          '/images/touxiang.jpeg',
          '/images/touxiang.jpeg'
        ],
        pep:10
      },
      {
        add: '朝阳公园',
        time: '今天（13：30-15：30）',
        static: '2',
        images: [
          '/images/touxiang.jpeg',
          '/images/touxiang.jpeg',
          '/images/touxiang.jpeg'
        ],
        pep: 10
      },
      {
        add: '朝阳公园',
        time: '今天（13：30-15：30）',
        static: '3',
        images: [
          '/images/touxiang.jpeg',
          '/images/touxiang.jpeg',
          '/images/touxiang.jpeg'
        ],
        pep: 10
      },
      {
        add: '朝阳公园',
        time: '今天（13：30-15：30）',
        static: '4',
        images: [
          '/images/touxiang.jpeg',
          '/images/touxiang.jpeg',
          '/images/touxiang.jpeg'
        ],
        pep: 10
      },
      {
        add: '朝阳公园',
        time: '今天（13：30-15：30）',
        static: '5',
        images: [
          '/images/touxiang.jpeg',
          '/images/touxiang.jpeg',
          '/images/touxiang.jpeg'
        ],
        pep: 10
      },
      {
        add: '朝阳公园',
        time: '今天（13：30-15：30）',
        static: '6',
        images: [
          '/images/touxiang.jpeg',
          '/images/touxiang.jpeg',
          '/images/touxiang.jpeg'
        ],
        pep: 10
      }
    ]
    this.setData({ yueliulist })
  },
  navChange: function (e) {
    console.log(e.detail)
    this.setData({ nav1: e.detail.nav1, nav3: e.detail.nav3 })
  },
  navChange2: function (e) {
    console.log(e.detail.nav3 )
    this.setData({ nav3: e.detail.nav3 })
  },
})

 