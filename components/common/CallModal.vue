<template>
  <transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              Modal Title
            </h5>
            <a href="#" class="close" data-dismiss="modal" aria-label="Close" @click="$parent.toggleModal = false">
              <em class="icon ni ni-cross" />
            </a>
          </div>
          <div class="modal-body">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem similique earum necessitatibus nesciunt! Quia id expedita asperiores voluptatem odit quis fugit sapiente assumenda sunt voluptatibus atque facere autem, omnis explicabo.</p>
          </div>
          <div class="modal-footer bg-light">
            <span class="sub-text">Modal Footer Text</span>
            <button class="btn btn-primary" @click="$parent.toggleModal = false">
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>

export default {
  name: 'Modal',
  props: {
    show: Boolean
  }
}
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}
</style>
