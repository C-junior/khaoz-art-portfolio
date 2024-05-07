<template>
  <div class="gallery">
    <div class="image-container" v-for="(image, index) in images" :key="index" @click="openModal(image)">
      <img :src="image.src" :alt="image.alt">
    </div>
    <ImageModal :selectedImage="selectedImage" :showModal="isModalVisible" @close="closeModal" />
  </div>
</template>

<script>
import ImageModal from './ImageModal.vue';

export default {
  name: 'Gallery',
  components: {
    ImageModal
  },
  data() {
    return {
      images: [
        { src: '../src/assets/cris-junior-mistyfullrework.jpg', alt: 'Image 1' },
        { src: '../src/assets/cris-junior-nemesis.jpg', alt: 'Image 2' },
        { src: '../src/assets/cris-junior-nijinrework.jpg', alt: 'Image 3' },
        { src: '../src/assets/cris-junior-trezemod.jpg', alt: 'Image 4' },
        { src: '../src/assets/cris-junior-yelanrework.jpg', alt: 'Image 5' },
        { src: '../src/assets/cris-junior-meryl.jpg', alt: 'Image 6' },
        { src: '../src/assets/cris-junior-dj.jpg', alt: 'Image 6' },
        { src: '../src/assets/cris-junior-nami.jpg', alt: 'Image 6' },
        
    
      
        // Add more images as needed
      ],
      isModalVisible: false,
      selectedImage: null
    };
  },
  methods: {
    openModal(image) {
      this.selectedImage = image;
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  }
};
</script>

<style scoped>
/* Gallery styles */
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;
  overflow-y: auto;
  margin-top: 110px;
  padding: 20px;
  max-height: calc(100vh - 30px); /* Adjusts the maximum height to fit the viewport */
}

.image-container {
  position: relative;
  border-radius: 10px;
 
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.image-container:hover img {
  transform: scale(1.1);
}

.image-container {
  cursor: pointer;
}

.image-container:hover img {
  transform: scale(1.1);
}

/* Media query for small screens */
@media (max-width: 768px) {
  .gallery {
    grid-template-columns: repeat(3, 1fr); /* 3 images per row */
    grid-gap: 5px; /* smaller gap between images */
    padding: 10px; /* smaller padding */
    margin-top: 18px;
    overflow: auto; /* Enable horizontal scrolling if needed */
  }
}
</style>
