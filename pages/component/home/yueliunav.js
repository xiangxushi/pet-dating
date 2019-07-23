// component/yueliunav.js

const fn = require('../../../utils/fn.js')

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    nav1:{ type:Number},
    nav2:{type:Number},
    nav3:{type:Number}
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    link(e) {
      let nav1 = Number(e.target.dataset.id)
      let  nav3
      switch (nav1) {
        case 1:
          nav3 = 1
        case 2:
          nav3 = 1
        case 3:
          nav3 = 1
      }
      this.triggerEvent("navChange", {nav1,nav3})
    },
    link2(e){
      let nav3 = Number(e.target.dataset.id)
      this.triggerEvent("navChange2", { nav3 })
    
    }
  }

})
