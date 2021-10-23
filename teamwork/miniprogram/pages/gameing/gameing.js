// pages/gameing/gameing.js
var turn = 0
Page({

    /**
     * 页面的初始数据
     */
    data: {
      // 说明区域
        heart:'红桃区：',
        diamond:'方片区：',
        spade:'黑桃区：',
        club:'梅花区：',
        quitarea:'弃牌区',
        takearea:'抽牌区',
        heart_in_take:'红桃数：',
        diamond_in_take:'方片数：',
        club_in_take:'梅花数：',
        spade_in_take:'黑桃数：',
        // 抽牌区
        number_h:0,number_d:0,number_c:0,number_s:0,
        // 玩家一
        p1_heart:0,p1_diamond:0,p1_club:0,p1_spade:0,
        // 玩家二
        p2_heart:0,p2_diamond:0,p2_club:0,p2_spade:0,
        // 当前p1手牌显示
        p1_now_heart:'cloud://cloud1-4gref0255f5815d0.636c-cloud1-4gref0255f5815d0-1307785010/扑克全套资源-poker-爱给网/3_14.png',
        p1_now_diamond:'cloud://cloud1-4gref0255f5815d0.636c-cloud1-4gref0255f5815d0-1307785010/扑克全套资源-poker-爱给网/1_14.png',
        p1_now_club:'cloud://cloud1-4gref0255f5815d0.636c-cloud1-4gref0255f5815d0-1307785010/扑克全套资源-poker-爱给网/2_14.png',
        p1_now_spade:'cloud://cloud1-4gref0255f5815d0.636c-cloud1-4gref0255f5815d0-1307785010/扑克全套资源-poker-爱给网/4_14.png',
        cover:'cloud://cloud1-4gref0255f5815d0.636c-cloud1-4gref0255f5815d0-1307785010/cover.png',
        // 玩家一的动画
        animation1:'',animation2:'',animation3:'',animation4:'',
        // 玩家二的动画
        animation5:'',animation6:'',animation7:'',animation8:'',
    },
    onLoad: function (options) {
      
    },
    onReady: function () {
        // 玩家一出红桃动画
        this.animation1 = wx.createAnimation({
          delay: 0,
          duration:500,
          timingFunction:'linear',
        })
        // 出方片
        this.animation2 = wx.createAnimation({
            delay: 0,
            duration:500,
            timingFunction:'linear',
        })
        // 出梅花
        this.animation3 = wx.createAnimation({
            delay: 0,
            duration:500,
            timingFunction:'linear',
        })
        // 出黑桃
        this.animation4 = wx.createAnimation({
            delay: 0,
            duration:500,
            timingFunction:'linear',
          })
        //   玩家二 出红桃
          this.animation5 = wx.createAnimation({
            delay: 0,
            duration:500,
            timingFunction:'linear',
          })
        //   出方片
          this.animation6 = wx.createAnimation({
            delay: 0,
            duration:500,
            timingFunction:'linear',
          })
        //   出梅花
          this.animation7 = wx.createAnimation({
            delay: 0,
            duration:500,
            timingFunction:'linear',
          })
        //   出黑桃
          this.animation8 = wx.createAnimation({
            delay: 0,
            duration:500,
            timingFunction:'linear',
          })

    },
    // 玩家一出红桃动画
    p1_h_animation(){
      this.animation1.scale(1.4,2.0).step().translate(183,120).skew(180).step()
        // 输出动画
        this.setData({
            animation1:this.animation1.export()
        })
    },
    // 出方片
    p1_d_animation(){
      this.animation2.scale(1.4,2.0).step().translate(118,120).skew(180).step()
      // 输出动画
      this.setData({
          animation2:this.animation2.export()
      })
  },
  p1_c_animation(){
    this.animation3.scale(1.4,2.0).step().translate(53,120).skew(180).step()
    // 输出动画
    this.setData({
        animation3:this.animation3.export()
    })
  },
  p1_s_animation(){
    this.animation4.scale(1.4,2.0).step().translate(-15,120).skew(180).step()
    // 输出动画
    this.setData({
        animation4:this.animation4.export()
    })
  },













    onShow: function () {

    },
    onHide: function () {

    },
    onUnload: function () {

    },
    onPullDownRefresh: function () {

    },
    onReachBottom: function () {

    },
    onShareAppMessage: function () {

    }
})