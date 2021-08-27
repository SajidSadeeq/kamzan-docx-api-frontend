<template>
  <div>
    <div class="nk-app-root">
      <!-- main @s -->
      <div class="nk-main ">
        <!-- sidebar @s -->
        <Sidebar />
        <!-- sidebar @e -->
        <!-- wrap @s -->
        <div class="nk-wrap ">
          <!-- main header @s -->
          <Header />
          <!-- main header @e -->
          <!-- content @s -->
          <Nuxt />
          <!-- content @e -->
          <!-- footer @s -->
          <Footer />
          <!-- footer @e -->
        </div>
        <!-- wrap @e -->
      </div>
      <!-- main @e -->
    </div>
  </div>
</template>

<script>
import Sidebar from '~/components/admin-layout/Sidebar.vue'
import Header from '~/components/admin-layout/Header.vue'
import Footer from '~/components/admin-layout/Footer.vue'

export default {
  components: {
    Sidebar,
    Header,
    Footer
  },
  middleware: 'auth',
  mounted () {
  }
}
</script>

<style>
</style>
