const map = {
  getLocation(){
    return new Promise((res,rej)=>{
      wx.getLocation({
        success: function(data) {
          res(data)
        },
      })
    })
  }
}

module.exports = map