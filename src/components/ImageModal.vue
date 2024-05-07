<template>
    <div class="modal" v-if="showModal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <img :src="selectedImage.src" :alt="selectedImage.alt" class="modal-image">
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ImageModal',
    props: {
      selectedImage: Object,
      showModal: Boolean
    },
    methods: {
      closeModal() {
        this.$emit('close');
      }
    }
  };
  </script>
  
  <style scoped>
  /* Modal styles */
  .modal {
    display: block;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }
  
  .modal-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: black;
    padding: 20px;
    border-radius: 5px;
  }
  
  .close {
    position: absolute;
    top: -10px;
    right: 5px;
    font-size: 30px;
    cursor: pointer;
  }
  
  .modal-image {
    height: 80vh;
   
  }
  @media (max-width: 768px) {
    .modal-image {
      width: 90vw;
      height: auto;
    }
  }
  </style>
  