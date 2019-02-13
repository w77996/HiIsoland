import {HTTP} from '../utils/http.js'
class LikeModel extends HTTP{
  like(beahavior,artID,category){
    let url = beahavior=='like'?'like':'like/cancel';
    this.request({
      url: url,
      category:'',
      method:'POST',
      data:{art_id:artID,type:category}
    })
  }

}

export {LikeModel}