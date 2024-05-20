<template>
  <header class="header">
    <div class="header-container">
      <img src="/logo.svg" alt="Логотип">
    </div>
  </header>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@import '../variables/colors.scss';

.header {
  width: 100%;

  .header-container {
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
      //left: -215px;
      transform: translate(-150%, -10%);

      @media (max-width: 1200px) and (min-width: 993px) {
        width: 140px;
        transform: translate(10%, -10%);
      }

      @media (max-width: 992px) and (min-width: 769px) {
        width: 130px;
        transform: translate(50%, -10%);
      }

      @media (max-width: 768px) and (min-width: 577px) {
        width: 120px;
        transform: translate(80%, -10%);
      }

      @media (max-width: 576px) {
        width: 100px;
        transform: translate(100%, -10%);
      }
    }
  }
}
</style>

