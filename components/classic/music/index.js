// components/classic/music/index.js
const mMgr = wx.getBackgroundAudioManager();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    img:String,
    content:String,
    src:String
  },

  /**
   * 组件的初始数据
   */
  data: {
    playing: false,
    waittingUrl: 'images/player@waitting.png',
    playingUrl: 'images/player@playing.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
      onPlay:function(){
        if(!this.data.playing){
          this.setData({
            playing: true
          })
          mMgr.src = this.properties.src;
          mMgr.title = this.properties.content;
        }else{
          this.setData({
            playing:false
          })
          mMgr.pause()
        }
       
      }
     
  }
})
