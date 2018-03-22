<template lang="html">
  <div class="footer">

    <div class="content">到底了</div>
    <br>
    <div>
      <a href="http://www.miitbeian.gov.cn">辽ICP备16008416号</a>
    </div>
  </div>
</template>

<script>
export default {



}
</script>

<style lang="scss">
.footer {
    position: relative;
    background-color: #0D0E0D;
    color: #AEAFAE;
    text-align: center;
    // border-top: 0.05rem dashed #AEAFAE;
    // height: 0.8rem;
    padding: 20px 0;
    overflow: hidden;
    border-top: 3px dashed #aeafae;

    .content {
        // margin-top: 20px;
    }
    a {
        margin: 0 auto;
        color: #AEAFAE;
        left: 50%;
        transform: translateX(-50%);
        position: absolute;
        bottom: 10px;
        font-size: 10px;
    }
}
</style>
