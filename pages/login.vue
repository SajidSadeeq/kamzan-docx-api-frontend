<template>
  <div class="nk-app-root">
    <!-- main @s  -->
    <div class="nk-main">
      <!-- wrap @s  -->
      <div class="nk-wrap nk-wrap-nosidebar">
        <!-- content @s  -->
        <div class="nk-content">
          <div class="nk-block nk-block-middle nk-auth-body wide-lg">
            <div class="card login_register_border">
              <div class="card-inner card-inner-lg">
                <div class="nk-block-head">
                  <div class="nk-block-between">
                    <div class="nk-block-head-content">
                      <h5 class="nk-block-title">
                        Api Testing
                      </h5>
                    </div>
                    <div class="nk-block-head-content">
                      <div class="toggle-wrap nk-block-tools-toggle">
                        <a href="#" class="btn btn-icon btn-trigger toggle-expand mr-n1" data-target="more-options"><em class="icon ni ni-more-v" /></a>
                        <div class="toggle-expand-content" data-content="more-options">
                          <ul class="nk-block-tools g-3">
                            <li class="nk-block-tools-opt">
                              <a href="#" class="btn btn-primary d-none d-md-inline-flex" @click="processApi">
                                <em class="icon ni ni-plus" /><span>Process Api</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <form action="#" method="post" @submit.prevent="handleSubmit">
                  <div class="row">
                    <div class="col">
                      <div class="row">
                        <div v-for="(text, index) in inputF" :key="index" class="col-md-12">
                          <div class="row">
                            <div class="col-md-5">
                              <div class="form-group">
                                <div class="form-label-group">
                                  <label
                                    class="form-label"
                                    for="default-01"
                                  >Find Text</label>
                                </div>
                                <input
                                  id="default-01"
                                  :key="index"
                                  v-model="text.find"
                                  type="text"
                                  class="form-control form-control-lg"
                                >
                              </div>
                            </div>
                            <div class="col-md-5">
                              <div class="form-group">
                                <div class="form-label-group">
                                  <label
                                    class="form-label"
                                    for="default-01"
                                  >Replace Text</label>
                                </div>
                                <input
                                  id="default-01"
                                  :key="index"
                                  v-model="text.replace"
                                  type="text"
                                  class="form-control form-control-lg"
                                >
                              </div>
                            </div>
                            <div class="col-md-2 mt-4" style="margin-top:37px !important">
                              <button
                                type="button"
                                class="btn btn-sm btn-danger btn-block"
                                @click="removeInput(index)"
                              >
                                <em class="icon ni ni-trash-alt" />
                              </button>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-12 mt-2">
                          <div class="form-group">
                            <button
                              type="button"
                              class="btn btn-lg btn-success btn-block"
                              @click="addInput()"
                            >
                              Add Text Input
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="row">
                        <div v-for="(image, index) in imageF" :key="index" class="col-md-12">
                          <div class="row">
                            <div class="col-md-5">
                              <div class="form-group">
                                <div class="form-label-group">
                                  <label
                                    class="form-label"
                                  >Find Image</label>
                                </div>
                                <input
                                  type="file"
                                  class="form-control form-control-lg"
                                  name="find[]"
                                  @change="findFile($event, index)"
                                >
                              </div>
                            </div>
                            <div class="col-md-5">
                              <div class="form-group">
                                <div class="form-label-group">
                                  <label
                                    class="form-label"
                                  >Replace Image</label>
                                </div>
                                <input
                                  type="file"
                                  class="form-control form-control-lg"
                                  name="replace[]"
                                  @change="replaceFile($event, index)"
                                >
                              </div>
                            </div>
                            <div class="col-md-2 mt-4" style="margin-top:37px !important">
                              <button
                                type="button"
                                class="btn btn-sm btn-danger btn-block"
                                @click="removeImage(index)"
                              >
                                <em class="icon ni ni-trash-alt" />
                              </button>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-12 mt-2">
                          <div class="form-group">
                            <button
                              type="button"
                              class="btn btn-lg btn-success btn-block"
                              @click="addImage()"
                            >
                              Add Image
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <!-- <div class="form-note-s2 text-center pt-4">
                  New on our platform?
                  <a href="http://localhost:8000/register">Create an account</a>
                </div> -->
              </div>
            </div>
          </div>
          <div class="nk-footer nk-auth-footer-full">
            <div class="container wide-lg">
              <div class="row g-3">
                <div class="col-lg-6 order-lg-last">
                  <ul
                    class="
                      nav nav-sm
                      justify-content-center justify-content-lg-end
                    "
                  >
                    <!-- <li class="nav-item">
                      <a class="nav-link" href="#">Terms & Condition</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Privacy Policy</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Help</a>
                    </li> -->
                  </ul>
                </div>
                <div class="col-lg-6">
                  <div class="nk-block-content text-center text-lg-left">
                    <p class="text-soft">
                      &copy; {{ new Date().getFullYear() }} Sajid
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- wrap @e  -->
      </div>
      <!-- content @e  -->
    </div>
    <!-- main @e  -->
  </div>
</template>

<script>

export default {
  layout: 'login',
  data () {
    return {
      inputF: [
        {
          find: '',
          replace: ''
        }
      ],
      imageF: [
        {
          find: null,
          replace: null
        }
      ],
      findText: [],
      replaceText: [],
      findImages: [],
      replaceImages: [],
      loading: true
    }
  },
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    },
    async login () {
      const self = this
      await this.$auth.loginWith('laravelJWT', {
        data: {
          email: this.email,
          password: this.password
        }
      }).catch(function (error) {
        if (error.response.data.code === 401) {
          self.error_message = error.response.data.message
        }
        self.$nuxt.$loading.finish()
      })
      this.$router.push('/')
    },
    handleSubmit () {
      const data = new FormData()
      data.append('findImages[]', this.findImages)
      data.append('replaceImages[]', this.replaceImages)
    },
    processApi () {
      const self = this
      self.inputF.forEach((value, index) => {
        self.findText.push(value.find)
        self.replaceText.push(value.replace)
      })
      self.$nuxt.$loading.start()
      const formData = new FormData()
      formData.append('inputF', self.inputF)
      formData.append('find_text', self.findText)
      formData.append('replace_text', self.replaceText)
      formData.append('findImages', self.findImages)
      formData.append('replaceImages', self.replaceImages)
      formData.append('imageF', self.imageF)

      this.$axios.post('api/v1/resources/firstapi', formData)
        .then(function (response) {
          self.$toast.success('Good is created successfully')
          self.$nuxt.$loading.finish()
          setTimeout(function () {
            self.$toast.clear()
          }, 3000)
        }).catch(function (error) {
          self.form_errors = error.response.data.data
          self.$nuxt.$loading.finish()
        })
    },
    addInput () {
      this.inputF.push(
        {
          find: '',
          replace: ''
        })
    },
    removeInput (index) {
      this.$delete(this.inputF, index)
    },
    addImage () {
      this.imageF.push(
        {
          find: null,
          replace: null
        })
    },
    removeImage (index) {
      this.$delete(this.findImages, index)
      this.$delete(this.replaceImages, index)
    },
    findFile (event, index) {
      // const fImage = event.target.files[0]
      this.imageF.find[index] = event.target.files[0]
      // this.findImages.push(fImage)
    },
    replaceFile (event, index) {
      console.log(event.target.files[0])
      // const rImage = event.target.files[0]
      this.imageF.replace[index] = event.target.files[0]
      // this.replaceImages.push(rImage)
    }
  }
}
</script>

<style scoped>
</style>
