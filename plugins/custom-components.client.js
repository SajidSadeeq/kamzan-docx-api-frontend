import Vue from 'vue'
import VueUploadMultipleImage from 'vue-upload-multiple-image'
import VueTelInput from 'vue-tel-input'
import SlidingPagination from 'vue-sliding-pagination'
import Multiselect from 'vue-multiselect'
import VueApexCharts from 'vue-apexcharts'

Vue.use(VueTelInput, {})
Vue.component('VueUploadMultipleImage', VueUploadMultipleImage)
Vue.component('VueTelInput', VueTelInput)
Vue.component('VuePagination', SlidingPagination)
Vue.component('Multiselect', Multiselect)
Vue.component('Apexchart', VueApexCharts)
