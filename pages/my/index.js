// pages/my/index.js
//获取应用实例
const app = getApp()
const fn = require('../../utils/fn.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '小阳光',
    sex: 'girl',
    gouliang: 520,
    zan: 200,
    guanzhu: 200,
    fensi: 190,
    userInfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getUserInfo({
      success: function (res) {

        console.log(res);
        that.data.userInfo = res.userInfo;

        that.setData({
          userInfo: that.data.userInfo
        })
      }
    })
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  link: function (e) {
    fn.link(e.currentTarget.dataset.url)
  },
  goAddPet: function () {
    wx.navigateTo({
      url: '/pages/addPet/addPet',
    })
  },
  goFoodRecord:function(){
    wx.navigateTo({
      url: '/pages/dogFoodRecord/dogFoodRecord',
    })
  },
  bindGetUserInfo(e) {
    console.log(e.detail.userInfo)
  }
})
