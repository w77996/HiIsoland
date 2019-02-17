// pages/book-detail/book-detail.js
import {
  BookModel
} from '../../models/book.js'
const bookModel = new BookModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    book: null,
    comments: [],
    noComment: true,
    posting: false,
    like: false,
    count: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let bid = options.bid
    bookModel.getDetail(bid)
    .then((res)=>{
        this.setData({
          book: res.data
        })
    })

    bookModel.getComment(bid).then((res)=>{
      console.log(res)
      this.setData({
        noComment: res.data.comments == false ? true : false,
        comments: res.data.comments
      })
    })

    bookModel.getLikeStatus(bid, (data) => {
      this.setData({
        like: data.like_status,
        count: data.fav_nums
      })
    })


  },

  onFakePost:function (event){
    this.setData({
      posting:true
    })
  },

  onCancel:function(event){
    this.setData({
      posting:false
    })
  },

  onPost:function(event){
      const commentInput = event.detail.value;
      if(commentInput.length > 12){
        wx.showToast({
          title: '12',
          icon:'none'
        })
      }

      this.data.comments.unshift({
        cotent:comment,
        nums:1
      })
      bookModel.postComment(this.data.book.id,comment).then((res)=>{
        this.setData({
          comments:this.data.comments,
          posting:false
        })
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

  }
})