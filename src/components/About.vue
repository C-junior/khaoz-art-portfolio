<script>
export default {
  name: 'About'
};
</script>
<template>
    <div class="about">
    <div class="header">
    <h2>About Me</h2>
    <div class="divider"></div>
    </div>
    <div class="content">
    <p>Hi! I'm Khaos, a digital artist inspired by anime and gaming. I specialize in captivating illustrations and character designs. Art, to me, is about forming emotional connections and inviting viewers on a visual adventure. Whether for personal or collaborative projects, I put my heart into every piece.</p>
    <p>Thank you for exploring my work. I hope it sparks your imagination and brings joy. If you're interested in commissions, collaborations, or want to chat about anime and games, feel free to reach out!</p>
    </div>
    </div>
    </template>
  
  <style scoped>
  .about {
    max-width: 800px;
    margin: 0 auto;
    padding: 10px;
    color: #d3d0d0;
    overflow-y: auto;
  }
  .about .header {
    text-align: center;
    margin-bottom: 16px;
  }
  
  .about .header h2 {
    font-size: 2em;
    margin-bottom: 6px;
    margin-top: 36px;
  }
  
  .about .header .divider {
    width: 50px;
    height: 3px;
    background-color: #333;
    margin: 0 auto;
  }
  
  .about .content {
    line-height: 1.2;
  }
  
  .about p {
    font-size: 1.1rem;
    margin-bottom: 15px;
  }
  
  .about p:last-child {
    margin-bottom: 0;
  }
  </style>
  