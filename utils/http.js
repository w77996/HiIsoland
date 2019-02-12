import {config} from 'config.js'
class HTTP{
  request(params){
      if(!params.method){
        params.method = 'GET'
      }
      wx.request({
        url: config.api_base.url + params.url,
        data: params.data,
        method: params.method,
        header:{
          'content-type':'application/json',
          'appkey':config.appkey
        },
        success:(res)=>{
          let code = res.statusCode;
          if(!code.startsWith('2')){

          }else{

          }

        },
        fail:(err)=>{

        }
      })
  }
}

export {HTTP}