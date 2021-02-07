<!-- 公共头部 -->
<template>
  <div class="app-top">
    <div class="app-top-content clearFix">
      <div class="app-top-content-text left">
        <p>欢迎来到中国矿产地质信息服务品台！</p>
        <span>您是第 <em>001</em> 号客户！</span>
      </div>
      <div class="app-top-content-warpper right">
        <div class="app-top-content-warpper-left">
          <a href="javascript:;">地调局</a>
          <a href="javascript:;">资源所</a>
          <a href="javascript:;">地质云</a>
        </div>
        <div class="app-top-content-warpper-right">
          <span> <i class="" /> </span>
          <span>注册</span>
          <span>登录</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppTop',

  components: {},

  data() {
    return {
    }
  },

  computed: {},

  mounted() {},

  methods: {}
}

</script>
<style lang='scss' scoped>
.app-top{
  width: 100%;
  height: 59px;
  line-height: 59px;
  border-bottom: 2px solid #b98108;
  &-content{
    width: 1270px;
    margin: 0 auto;
    &-text{
        p{
          display: inline-block;
        }
        span{
          color: #a0a0a0;
          em{
            color: #297eb5;
          }
        }
    }
    &-warpper{
      &-left{
        a{
          color: #2a3294;
        }
      }
    }
  }
}
</style>
