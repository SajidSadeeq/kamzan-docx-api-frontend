import Vue from 'vue'
import VueUploadMultipleImage from 'vue-upload-multiple-image'
import VueTelInput from 'vue-tel-input'
import SlidingPagination from 'vue-sliding-pagination'
import Multiselect from 'vue-multiselect'
import VueApexCharts from 'vue-apexcharts'
import vuescroll from 'vuescroll'
import VueHtmlToPaper from 'vue-html-to-paper'
import VTooltip from 'v-tooltip'
import DatePicker from 'vue2-datepicker'
import VueSearch from 'vue-input-search/dist/vue-search.common'
import VSelect from 'vue-select'
import JsonCSV from 'vue-json-csv'
import 'vue-select/dist/vue-select.css'
import 'v-tooltip/dist/v-tooltip.css'
import 'vue-input-search/dist/vue-search.css'

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
Vue.component('DatePicker', DatePicker)
Vue.component('VueSearch', VueSearch)
Vue.component('VSelect', VSelect)
Vue.component('DownloadCsv', JsonCSV)
Vue.use(VueHtmlToPaper, options)
