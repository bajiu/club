<template lang="html">
  <div class="page">
    <div class="face">
      <h1>{{data.title}}</h1>
      <div class="content" v-html="data.content"></div>
    </div>
    <div class="face_left">
      {{data.timer}}
    </div>
    <div class="face_right">
      {{data.classify}}#
    </div>
    <Button @click="returnHome" shape="circle" type="info" size="small" class="btn">  返回</Button>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data(){
    return {
      data : {
        times :  null,
        title : '木有标题',
        content : '加载中...',
        timer : '木有时间',
        classify : '木有分类'
      }
    }
  },
  methods : {
    returnHome(){
      this.$router.push({ name: 'list'})
    }
  },
  beforeMount(){
    // console.log(this.$route.query.id);
    let _this = this;
    axios.post('/list/content',{times : this.$route.query.id})
    .then(function(res){
      _this.data = {};
      _this.data = res.data.data.content;
    }).catch(function(res){
      _this.data = {
        times :  89,
        title : '可能是网络不好吧',
        content : `今天也要开开心心的哦（^_^）`,
        timer : `（^_^）`,
        classify : `（^_^）`
      }
    })
  }
}
</script>

<style lang="scss">
.page{
  position: relative;
  margin: 0.2rem auto;
  background-color: #fff;
  width: 80%;
  border-radius: 5px;
  overflow: hidden;
  font-size: 14px;
  color: #4D4D4D;
  a{
    font-size: 14px;
    cursor: pointer;
    color: #20A0FF;
  }
  .face_left{
    height: 20px;
    position: absolute;
    left: 0;
    top: 0;
    font-size: 14px;
    width: 100px;
    text-align: center;
    // background-color: #dadada;
    overflow: hidden;
    line-height: 20px;
    border-bottom: 1px solid #dadada;
    // border-radius: 3px;
  }
  .face_right{
    border-radius: 3px;
    height: 20px;
    position: absolute;
    right: 0;
    top: 0;
    font-size: 14px;
    width: 100px;
    background-color: #dadada;
    overflow: hidden;
    line-height: 20px;

    text-align:right;
  }
  .face{
    padding: 20px 0.5rem;
    width: calc(100% - 1rem);
    min-height: 2rem;

    h1{
      text-align: center;
    }
    blockquote{
      display: block;
      border-left: 8px solid #d0e5f2;
      padding: 5px 10px;
      margin: 10px 0;
      line-height: 1.4;
      font-size: 100%;
      background-color: #f1f1f1;
    }
    pre{
      display: block;
      font-size: 13px;
      color: #333;
      word-break: break-all;
      word-wrap: break-word;
      background-color: #f5f5f5;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    code{
      font-size: inherit;
      color: inherit;
      white-space: pre-wrap;
      background-color: transparent;
      border-radius: 0;
    }
    li{
      list-style-type: disc;
    }
    ol{
      list-style-type: decimal;
    }
  }
  .btn{
    margin-left: calc(50% - 24px);
    margin-top: 24px;
    margin-bottom: 10px;
  }

}

</style>
