Page({
  data: {
    TabCur: 0,
    ListCur: 0,
    scrollLeft: 0,
    scale:16,
    topSwiper: [{ "title": "附近宠友" }, { "title": "附近约遛" }, { "title": "单身宠友" }],
    listSwiper: [{ title: "地图", icon: "dingwei" }, { title: "列表", icon: "liebiao" }],
    markers:[
      {
        id:1,
        zIndex: 2,
        latitude: 39.9262,
        longitude: 116.44315,
        iconPath:"/images/home/head.png",
        width:43,
        height:40,
        alpha:0.5,
        callout:{
          content:"TEST"
        },
        label:{
          content:"2.0km",
        }
      }
    ]
  },
  onLoad:function(){
    this.mapCtx = wx.createMapContext('map')
  },
  onReady:function(){
    this.mapCtx.moveToLocation()
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e)
  },
  goLocation(e) {
    this.mapCtx.moveToLocation()
    this.scale = 16
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  },
  listSelect(e) {
    this.setData({
      ListCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
    console.log(e.currentTarget.dataset.id)
  }
})