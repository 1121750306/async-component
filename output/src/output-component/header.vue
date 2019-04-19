<style lang="less">
.output-header {
  background-color: #789;
  height: 50px;
  line-height: 50px;
  text-align: left;
  text-indent: 20px;
  display: flex;
  img {
    padding: 0 10px;
  }
}
</style>

<template>
  <div>
    <header class="output-header">
      <img src="~@/assets/image-error-white.svg" alt="">
      <div>这是header</div>
      <div>
        <span @click="change(1)">选择1</span>
        <span @click="change(2)">选择2</span>
        <router-link to="about">about</router-link>
      </div>
    </header>
    <main>
      这是选择后的内容
      {{select}}
    </main>
    <hello></hello>
    <router-view></router-view>
  </div>
</template>

<script>
import vue from 'vue';
import axios from '@/axios.js'
import Hello from '@/components/HelloWorld.vue'

export default {
  name: 'outputHeader',
  components: { Hello },
  data() {
    return {
      select: 1
    }
  },
  methods: {
    change(val) {
      this.select = val
    }
  },
  mounted() {
    axios.get('/test').then(res => {
      console.log(res)
    })
    .catch(e => {
      console.log(e)
    })
  }
};
</script>
