<template lang="html">
  <div class="banner">
    <div class="bg">
      <p>
        <span>花开堪折只须折</span>
        <br/>
        <span class="underLineSpan">莫待无花空折枝</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      top1 : "花开堪折只须折",
      top2 : "莫待无花空折枝"
    }
  }
}
</script>

<style lang="scss">
.banner{
  position: relative;
  overflow: hidden;
  .bg{
    position: relative;
    background: url("../img/winer.jpg") no-repeat #ccc;
    background-size: cover;
    p{
      text-align: center;
      padding: 210px 0;
      font-size: 26px;
      word-spacing:5px;
      letter-spacing: 5px;
      span{
        cursor: progress;
      }
      .underLineSpan{
        text-decoration: underline;
      }
    }
  }
}

</style>
