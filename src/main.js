// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import IEcharts from 'vue-echarts-v3/src/full.vue';
import $ from 'jquery'

Vue.config.productionTip = false

//注册地图
// IEcharts.registerMap() 

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
