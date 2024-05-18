<template>
  <header class="header">
    <div class="header-container">
      <img src="/logo.svg">
    </div>
  </header>
</template>


<script setup>

</script>

<style lang="scss" scoped>
.header {
  width: 100%;

  & .header-container {
    position: relative;
    display: flex;
    align-items: center;
    height: 106px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;

    img {
      width: 150px;
      position: absolute;
      left: -200px;

      @media (max-width: 768px) {
        width: 120px;
        left: -50px;
      }

      @media (max-width: 480px) {
        width: 100px;
        left: 20px;
      }
    }
  }
}
</style>
