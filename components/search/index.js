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
    dataArrays: []
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  attached() {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onCancel(event) {
      this.triggerEvent('cancel', {}, {})
    },
    onConfirm(event) {
      const q = event.detail.value;
      bookModel.search(0, q).then((res) => {
          this.setData({
            dataArrays:res.books
          })
      })
    }
  }
})