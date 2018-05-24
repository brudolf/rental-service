import Vue from 'vue'
import App from './App'
import fullCalendar from 'vue-fullcalendar'
import datePicker from 'vue-bootstrap-datetimepicker'
import 'bootstrap/dist/css/bootstrap.css'
import 'eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css'

Vue.use(datePicker)
Vue.component('full-calendar', fullCalendar)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
