import {
  config
} from 'config.js'
const tips = {
  1: '错误',
  1000: '输入参数错误',
  1005: '不正确或无效的开发者key',
  3000: '期刊不存在'
}

class HTTP {
  request({url, data = {}, method = 'GET'}) {
      return new Promise((resolve,reject)=>{
            this._request(url,resolve,reject,data,method);
      })
  }
  _request(url, resolve,reject,data={}, method='GET') {
    // url, data, method
    wx.request({
      url: config.api_base_url + url,
      data: data,
      method: method,
      header: {
        'content-type': 'application/json',
        'appkey': config.appKey
      },
      success: function(res) {
        const code = res.statusCode.toString()
        if (code.startsWith('2')) {
          // params.success && params.success(res)
          resolve(res)
        } else {
          // params.error && params.error(res)
          reject()
          const error_code = res.data.error_code
          console.log(this, res)
          wx.showToast({
            title: tips[error_code],
            icon: 'none',
            duration: 2000
          })
        }
      },
      fail: function(err) {
        // params.fail && params.fail(err)
        reject()
        wx.showToast({
          title: tips[1],
          icon: 'warn',
          duration: 2000
        })
      }
    })
  }

  show_error(error_code) {
    if (!error_code) {
      error_code = 1
    }
    const tip = tips[error_code]
    wx.showToast({
      title: tips[error_code],
      icon: 'warn',
      duration: 2000
    })
  }
}

export {
  HTTP
};