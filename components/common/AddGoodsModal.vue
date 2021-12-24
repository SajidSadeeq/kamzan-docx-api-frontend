<template>
  <div class="modal-backdrop">
    <div class="modal addGoods">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <div class="pull-left">
              <h6 class="modal-title">
                <span class="">Pallet NO# <u class="text-dark ml-2"><strong>{{ palletInfo.pallet_id }}</strong></u></span>
              </h6>
            </div>
            <div class="pull-right">
              <a href="javascript:;" class="close" data-dismiss="modal" aria-label="Close" @click="close">
                <em class="icon ni ni-cross" />
              </a>
            </div>
          </div>
          <!-- {{ palletInfo.good }} -->
          <div class="modal-body">
            <div class="">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">
                      Select Good
                    </th>
                    <th scope="col">
                      Set Quantity
                    </th>
                    <th scope="col">
                      Remove
                    </th>
                    <th scope="col" style="width:30px; padding-right:0;">
                      <a v-tooltip="'Add Good'" href="javascript:;" class="btn btn-dim btn-sm btn-outline-warning" @click="addNewGood"><em class="icon ni ni-plus" /></a>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(palletgood, index) in selectedGoods" :key="index">
                    <td>
                      <v-select :options="avaiableGoods" class="v-select form-control-sm" :value="palletgood.good_id" @input=" (good_id) => setPalletGood(palletgood, good_id)" />
                    </td>
                    <td>
                      <input
                        v-model="palletgood.qty"
                        type="number"
                        class="form-control form-control-sm"
                        name="name"
                        placeholder="Qty"
                        required=""
                        @keyup="setGoodQty($event, index)"
                      >
                    </td>
                    <td v-if="palletgood.id">
                      <button v-tooltip="'Remove'" type="button" class="btn btn-sm btn-danger" @click="removeGood(palletgood, index)">
                        <em class="icon ni ni-minus" />
                      </button>
                    </td>
                    <td v-else>
                      <button v-tooltip="'Remove'" type="button" class="btn btn-sm btn-danger" @click="removeNewGood(index)">
                        <em class="icon ni ni-minus" />
                      </button>
                    </td>
                    <td />
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="modal-footer bg-light">
            <button type="button" class="sub-text btn btn-primary text-white" @click="saveGoods">
              <em class="icon ni ni-file" />Save
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'

export default {
  name: 'Modal',
  components: {
    'v-select': vSelect
    // 'auto-complete': Autocomplete
  },
  props: {
    pallet:
      { type: Object, required: true }
  },
  data () {
    return {
      palletInfo: this.pallet,
      avaiableGoods: [],
      selectedGoods: [],
      loading: true
    }
  },
  mounted () {
    if (this.palletInfo.good.length < 1) {
      this.selectedGoods.push({
        good_id: '',
        qty: ''
      })
    }
    if (this.palletInfo.good.length > 0) {
      // this.palletInfo.good.forEach(function (v) { delete v.id })
      this.selectedGoods = this.palletInfo.good
    }
  },
  created () {
    this.fetchGoods()
  },
  methods: {
    close () {
      this.$emit('close')
    },
    async fetchGoods () {
      const self = this
      await this.$axios.get('good/fetch-available-goods')
        .then(function (response) {
          if (response.data.status !== false) {
            self.avaiableGoods = response.data.payload
          }
        })
    },
    setGoodQty (event, index) {
      const self = this
      self.selectedGoods[index].qty = event.target.value
    },
    addNewGood () {
      this.selectedGoods.push({ good_id: '', qty: '' })
    },
    removeNewGood (index) {
      this.$delete(this.selectedGoods, index)
    },
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    },
    removeGood (good, index) {
      const self = this
      this.$swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#1ee0ac',
        cancelButtonColor: '#e85347',
        confirmButtonText: 'Delete'
      }).then((result) => {
        if (result.isConfirmed) {
          self.$nuxt.$loading.start()
          this.$axios.post('/pallets-in-out/remove-pallet-good', {
            id: good.id
          })
            .then(function (response) {
              self.$delete(self.selectedGoods, index)
              self.$nuxt.$loading.finish()
            })

          this.$swal.fire(
            'Deleted!',
            'Your Good has been deleted.',
            'success'
          )
        }
      })
    },
    saveGoods () {
      this.palletInfo.good = this.selectedGoods
      this.$emit('selectedGoods', this.palletInfo)
      this.$emit('close')
    },
    setPalletGood (good, goodId) {
      good.good_id = goodId
    }
  }
}
</script>

<style scoped>
  .modal-dialog{
    min-width: 520px;
  }
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

  /* .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  } */

  /* .modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  } */

  /* .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  } */
</style>
