// components/search/index.js
import {
  BookModel
} from '../../models/book.js'
const bookModel = new BookModel()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    more:{
      type:String,
      observer:'_load_more'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    dataArray:[],
    finished:false,
    q:''
  },
  attached() {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    _load_more(){
      const length = this.data.dataArray.length;
      console.log(11111)
      bookModel.search(length,this.data.q).then(res=>{
        const tempArray = this.data.dataArray.concat(res.data.books);
        this.setData({
          dataArray:tempArray
        })
      })
    },
    onCancel(event) {
      this.triggerEvent('cancel', {}, {})
    },
    onConfirm(event) {
      this.setData({
        finished:true
      })
      const q = event.detail.value;
      bookModel.search(0, q).then((res) => {
        console.log(res.data)
          this.setData({
            dataArray:res.data.books,
            q:q
          })
      })
    }
  }
})