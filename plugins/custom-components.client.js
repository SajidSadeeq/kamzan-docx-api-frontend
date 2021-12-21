import Vue from 'vue'
import VueUploadMultipleImage from 'vue-upload-multiple-image'
import VueTelInput from 'vue-tel-input'
import SlidingPagination from 'vue-sliding-pagination'
import Multiselect from 'vue-multiselect'
import VueApexCharts from 'vue-apexcharts'
import vuescroll from 'vuescroll'
import VueHtmlToPaper from 'vue-html-to-paper'
import VTooltip from 'v-tooltip'
import 'v-tooltip/dist/v-tooltip.css'

const options = {
  name: '_blank',
  specs: [
    'fullscreen=yes',
    'titlebar=yes',
    'scrollbars=yes'
  ],
  styles: [
    '@/assets/admin/css/dashlite.css'
  ]
}

Vue.use(VueTelInput, {})
Vue.use(VTooltip)
Vue.component('VueUploadMultipleImage', VueUploadMultipleImage)
Vue.component('VueTelInput', VueTelInput)
Vue.component('VuePagination', SlidingPagination)
Vue.component('Multiselect', Multiselect)
Vue.component('Apexchart', VueApexCharts)
Vue.component('VueScroll', vuescroll)
Vue.use(VueHtmlToPaper, options)
