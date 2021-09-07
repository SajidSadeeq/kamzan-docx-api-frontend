<template>
  <div class="nk-app-root">
    <!-- main @s  -->
    <div class="nk-main">
      <!-- wrap @s  -->
      <div class="nk-wrap nk-wrap-nosidebar">
        <!-- content @s  -->
        <div class="nk-content">
          <div class="nk-block nk-block-middle nk-auth-body wide-xs">
            <div class="card login_register_border">
              <div class="card-inner card-inner-lg">
                <div class="nk-block-head">
                  <div class="brand-logo pb-4 text-center">
                    <a href="javascript:;" class="logo-link">
                      <img
                        class="logo-dark"
                        src="@/assets/admin/images/login-logo.png"
                        srcset="@/assets/admin/images/login-logo.png"
                        alt="logo-dark"
                      >
                    </a>
                  </div>
                  <!-- <div class="nk-block-head-content">
                    <h4 class="nk-block-title text-center">
                      Sign-In
                    </h4>
                  </div> -->
                </div>
                <form action="#" method="post" @submit.prevent="login">
                  <div class="form-group">
                    <div class="form-label-group">
                      <label
                        class="form-label"
                        for="default-01"
                      >Email or Username</label>
                    </div>
                    <input
                      id="default-01"
                      v-model="email"
                      type="text"
                      name="email"
                      class="form-control form-control-lg"
                    >
                  </div>
                  <div class="form-group">
                    <div class="form-label-group">
                      <label class="form-label" for="password">Password</label>
                      <!-- <a
                        class="link link-primary link-sm"
                        href="html/pages/auths/auth-reset-v2.html"
                      >Forgot Code?</a> -->
                    </div>
                    <div class="form-control-wrap">
                      <a
                        href="javascript:;"
                        class="form-icon form-icon-right passcode-switch"
                        data-target="password"
                        @click="switchVisibility"
                      >
                        <em class="passcode-icon icon-show icon ni ni-eye" />
                        <em
                          class="passcode-icon icon-hide icon ni ni-eye-off"
                        />
                      </a>
                      <input
                        id="password"
                        v-model="password"
                        :type="passwordType"
                        name="password"
                        class="form-control form-control-lg"
                      >
                    </div>
                    <span v-if="error_message" class="error">{{ error_message }}</span>
                  </div>
                  <div class="form-group">
                    <button
                      type="sumit"
                      class="btn btn-lg btn-primary btn-block"
                    >
                      Sign in
                    </button>
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
                    <li class="nav-item">
                      <a class="nav-link" href="#">Terms & Condition</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Privacy Policy</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Help</a>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-6">
                  <div class="nk-block-content text-center text-lg-left">
                    <p class="text-soft">
                      &copy; 2019 CryptoLite. All Rights Reserved.
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
      email: '',
      password: '',
      passwordType: 'password',
      error_message: ''
    }
  },
  methods: {
    switchVisibility () {
      this.passwordType = this.passwordType === 'password' ? 'text' : 'password'
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
      })
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
</style>
