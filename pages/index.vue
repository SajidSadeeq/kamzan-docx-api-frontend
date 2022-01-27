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
                    <!-- <div class="nk-block-head-content">
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
                    </div> -->
                  </div>
                </div>
                <form action="#" method="post" enctype="multipart/form-data" @submit.prevent="handleSubmit">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="row">
                        <div class="col-md-5">
                          <div class="form-group">
                            <div class="form-label-group">
                              <label
                                class="form-label"
                              >Document</label>
                            </div>
                            <input
                              ref="document"
                              type="file"
                              class="form-control form-control-lg"
                              @change="uploadDocument($event)"
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
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
                    <div class="col-md-6">
                      <div class="row">
                        <div v-for="(image, index) in 1" :key="index" class="col-md-12">
                          <div class="row">
                            <div class="col-md-5">
                              <div class="form-group">
                                <div class="form-label-group">
                                  <label
                                    class="form-label"
                                  >Find Image</label>
                                </div>
                                <input
                                  ref="findImages"
                                  type="file"
                                  class="form-control form-control-lg"
                                  multiple="true"
                                  @change="findFile($event)"
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
                                  ref="replaceImages"
                                  type="file"
                                  class="form-control form-control-lg"
                                  multiple="true"
                                  @change="replaceFile($event)"
                                >
                              </div>
                            </div>
                            <!-- <div class="col-md-2 mt-4" style="margin-top:37px !important">
                              <button
                                type="button"
                                class="btn btn-sm btn-danger btn-block"
                                @click="removeImage(index)"
                              >
                                <em class="icon ni ni-trash-alt" />
                              </button>
                            </div> -->
                          </div>
                        </div>
                        <!-- <div class="col-md-12 mt-2">
                          <div class="form-group">
                            <button
                              type="button"
                              class="btn btn-lg btn-success btn-block"
                              @click="addImage()"
                            >
                              Add Image
                            </button>
                          </div>
                        </div> -->
                      </div>
                    </div>
                  </div>
                  <div class="row text-right flex-row-reverse">
                    <div class="col-md-2 mt-2">
                      <div class="form-group">
                        <button
                          type="submit"
                          class="btn btn-lg btn-success btn-block"
                        >
                          Process
                        </button>
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
      findImages: '',
      replaceImages: '',
      loading: true,
      document: null
      // formData: new FormData()
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
      const self = this
      const formData = new FormData()
      self.$nuxt.$loading.start()
      // formData.append('inputF', self.inputF)
      // formData.append('find_text', self.findText)
      // formData.append('replace_text', self.replaceText)

      // self.inputF.forEach((value, index) => {
      //   self.findText.push(value.find)
      //   self.replaceText.push(value.replace)
      // })

      if (self.inputF.length > 0) {
        for (const i of Object.keys(self.inputF)) {
          formData.append('find_text[]', self.inputF[i].find)
          formData.append('replace_text[]', self.inputF[i].replace)
        }
      }

      if (self.replaceImages.length > 0) {
        for (const i of Object.keys(self.replaceImages)) {
          formData.append('replace_images[]', self.replaceImages[i])
        }
      }

      if (self.findImages.length > 0) {
        for (const i of Object.keys(self.findImages)) {
          formData.append('find_images[]', self.findImages[i])
        }
      }
      formData.append('document', self.document)

      this.$axios.post('api/v1/resources/firstapi', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then(function (response) {
          self.$toast.success('Good is created successfully')
          self.$nuxt.$loading.finish()
          console.log(response.data.data)
          // const fileURL = window.URL.createObjectURL(new Blob([response.data.data]))
          window.location.href = process.env.API_URL + 'download/' + response.data.data
          // const fileLink = document.createElement('a')

          // fileLink.href = fileURL
          // fileLink.setAttribute('download', 'file.docx')
          // document.body.appendChild(fileLink)
          // fileLink.click()

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
      // this.imageF.push(
      //   {
      //     find: null,
      //     replace: null
      //   })
      // this.findImages.push()
      // this.replaceImages.push()
    },
    removeImage (index) {
      const self = this
      // this.$delete(this.findImages, index)
      // this.$delete(this.replaceImages, index)
      this.$delete(self.imageF, index)
      this.$delete(self.imageF, index)
      this.$delete(self.findImages, index)
      this.$delete(self.replaceImages, index)
    },
    findFile (event) {
      const self = this
      // const setfImage = event.target.files[0]
      self.findImages = event.target.files
    },
    replaceFile (event) {
      const self = this
      // console.log(index)
      // self.imageF[index].replace.push(event.target.files[0])
      self.replaceImages = event.target.files
    },
    uploadDocument (event) {
      const self = this
      // console.log(index)
      // self.imageF[index].replace.push(event.target.files[0])
      self.document = event.target.files[0]
    }
  }
}
</script>

<style scoped>
</style>
