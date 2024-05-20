<template>
  <div class="title">
    <div class="title-container">
      <h1>Новости</h1>
      <img src="/img.svg" alt="Новости">
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@import '../variables/colors.scss';

.title {
  width: 100%;

  .title-container {
    position: relative;
    margin: 50px auto;
    overflow: hidden;

    img {
      width: 100%;
      height: auto;
      display: block;
    }

    h1 {
      position: absolute;
      z-index: 10;
      top: 50%;
      left: 50%;
      transform: translate(-550%, 100%);
      font-weight: 700;
      font-size: 36px;
      color: $dark-grey;

      @media (max-width: 1200px) {
        font-size: 32px;
        transform: translate(-50%, -50%);
      }

      @media (max-width: 992px) {
        font-size: 28px;
        transform: translate(-50%, 50%);
      }

      @media (max-width: 768px) {
        font-size: 24px;
        transform: translate(-50%, -50%);
      }

      @media (max-width: 576px) {
        font-size: 20px;
        transform: translate(-50%, -50%);
      }
    }
  }
}
</style>
