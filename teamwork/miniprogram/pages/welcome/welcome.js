Page({
    data: {
        welcome1:'欢迎来到猪尾巴纸牌游戏',
        welcome2:'进入游戏',
        id:'ID:',
        password:'PASSWORD:',
        zc:'注册',
        zh:'找回',
        role:'查看规则'
    },
    onLoad: function (options) {
    },
    jump_to_select(){
        wx.navigateTo({
          url: '../select/select',
        })
    },
    jump_to_zc(){
      wx.navigateTo({
        url: '../zc/zc',
      })
    },
    jump_to_zh(){
      wx.navigateTo({
        url: '../zh/zh',
      })
    },
    jump_to_role(){
      wx.navigateTo({
        url: '../role/role',
      })
    },
})