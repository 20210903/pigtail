// pages/select/select.js
Page({
    data: {
      item1:'人机对战',
      item2:'本地对战',
      item3:'在线对战'
    },
    onLoad: function (options) {
        wx.showToast({
          title: '选择游戏模式',
        })
    },
    game1(){
      wx.navigateTo({
        url: '../gameing/gameing',
      })
    },
    game2(){
      wx.navigateTo({
        url: '../gameing/gameing',
      })
    },
    game3(){
      wx.navigateTo({
        url: '../gameing/gameing',
      })
    },
    
})