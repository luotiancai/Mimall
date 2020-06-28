import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import {Message} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import store from './store'

//mock开关
const mock = false
if(mock){
  require("./mock/api")
}
//根据前端的跨域方式做调整
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8000
//接口错误拦截
axios.interceptors.response.use(function(response){
  let res = response.data
  let path = location.hash
  if(res.status == 0){
    return res.data
  }else if(res.status == 10){
    if(path !='#/index'){
      window.location.href = '/#/login'
    }
    return Promise.reject(res)
  }else{
    Message.warning(res.msg)
    return Promise.reject(res)
  }
},(error)=>{
  let res = error.response
  alert(res)
  return Promise.reject(res)
}
)

Vue.use(VueAxios,axios)
Vue.use(VueLazyLoad,{
  loading:'/imgs/loading-svg/loading-bars.svg'
})
Vue.use(VueCookie)

Vue.prototype.$Message = Message
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
