// pages/classic/classic.js
import {
  ClassicModel
} from '../../models/classic.js'
import {
  LikeModel
} from '../../models/like.js'
// let http = new HTTP()
let classicModel = new ClassicModel()
let likeModel = new LikeModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classic:null,
    latest:true,
    first:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // wx.request({
    //   url: 'http://bl.7yue.pro/v1/classic/latest',
    //   data: { appkey:"AbhC31IG7ruCDp57"},
    //   header:{
    //     appkey:"AbhC31IG7ruCDp57"
    //   },
    //   success:(res)=>{
    //     console.log(this.data)
    //   }
    // })
    // http.request({
    //   url:'classic/latest',
    //   success:(res)=>{

    //   }
    // });
    classicModel.getLatest((res) => {
      console.log(res)
      this.setData({
        classic: res.data
      })
    })
  },
  /**
   * 点赞事件
   */
  onLike: function(event) {
    console.log(event);
    let behavior = event.detail.behavior;
    likeModel.like(behavior, this.data.classic.id, this.data.classic.type);
  },
  onNext: function (event) {
    this._updateClassic('next')
    // let behavior = event.detail.behavior;
    // likeModel.like(behavior, this.data.classic.id, this.data.classic.type);
  },
 
  onPrevious: function (event) {
    console.log(event);
    // let behavior = event.detail.behavior;
    // likeModel.like(behavior, this.data.classic.id, this.data.classic.type);
    // let index = this.data.classic.index;
    // console.log(index)
    // classicModel.getPrevious(index,(res)=>{
    //     this.setData({
    //       classic:res.data,
    //       latest:classicModel.isLatest(res.index),
    //       first:classicModel.isFirst(res.index)
    //     })
    // });
    this._updateClassic('previous')
  },
  _updateClassic: function (nextOrPrevious) {
    let index = this.data.classic.index;
    console.log(index)
    classicModel.getClassic(index, nextOrPrevious,(res) => {
      this.setData({
        classic: res.data,
        latest: classicModel.isLatest(res.index),
        first: classicModel.isFirst(res.index)
      })
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})