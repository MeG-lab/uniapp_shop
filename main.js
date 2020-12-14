import Vue from 'vue'
import App from './App'
import { myRequest } from './unit/api.js'

Vue.prototype.$myRequest = myRequest
Vue.filter('formateDate',(data)=>{
	// console.log(data)
	const nData = new Date(data)
	const year = nData.getFullYear()
	const month = nData.getMonth().toString().padStart(2,0)
	const day = nData.getDay().toString().padStart(2,0)
	// console.log(year, month, day)
	return year + "-" + month + "-" + day
})

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
