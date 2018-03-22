<template lang="html">

  <div class="list" >
      <Card :bordered="false" class='main' v-for='(el,$index) in list' :key="$index">
          <div slot="title">
            <span class="title_left">
              &lt;{{el.timer}}&gt;
            </span>
            <span class="title_right">
               #{{el.classify}}
            </span>
            <h2 class="title">{{el.title}}</h2>
          </div>
          <p>{{el.letter}}</p>
          <Button @click="seeFace(el)" shape="circle" type="info" size="small" class="btn">查看内容</Button>
      </Card>
      <Button v-if="!overPage" @click="showList()" type="primary" long>加载更多</Button>
  </div>
</template>

<script>
  import axios from 'axios'
export default {
  data(){
    return {
      name : null,
      list : [{
        title : '加载中......',
        letter : `今天也要开开心心的哦（^_^）`,
        timer : `（^_^）`,
        classify : `（^_^）`,
        times : '89'
      }],
      page:0,
      overPage:false
    }
  },
  methods:{
    /**
     * [查看全部]
     */
    seeFace : function(el){
      this.$router.push({ name: 'sharePage' , query: { id: el.times }})
    },
    showList(){
      let _this = this;
      axios.post('/list/list',{pageNum:this.page})
      .then(function(res){
        if(_this.page == 0){
          _this.list = res.data.data.list;
        }else{
          if(res.data.data.else == 1){
            _this.overPage = true;
          }
          if(res.data.data.list.length >= 1){
            _this.list.push.apply(_this.list,res.data.data.list)
          }
        }
        _this.page++
      })
      .catch(function(err){
        _this.list = [{
          title : '可能是网络不好吧',
          letter : `今天也要开开心心的哦（^_^）`,
          timer : `（^_^）`,
          classify : `（^_^）`,
          times : '89'
        }]
      });
    }
  },
  beforeMount:function() {
    this.showList()
  }
}
</script>

<style lang="scss">
  .list{
    padding: 20px 10%;
    .main{
      margin-bottom: 20px;
    }
    .title{
      text-align: center;
    }
    .title_left{
      float: left;
      height: 20px;
      line-height: 20px;
    }
    .title_right{
      height: 20px;
      line-height: 20px;
      float: right;
    }
    .btn{
      margin-top: 24px;
      margin-left: calc(50% - 24px)
    }
  }
</style>
