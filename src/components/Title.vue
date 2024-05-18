<template>
  <div class="title">
    <div class="title-container">
      <h1>Новости</h1>
      <img src="/img.svg">
    </div>
  </div>
</template>

<script setup>

</script>


<style lang="scss" scoped>
@import '../variables/colors.scss';
.title {
  width: 100%;

  & .title-container {
    position: relative;
    margin: 50px auto;

    img {
      width: 100%;
      height: auto;
    }

    h1 {
      position: absolute;
      z-index: 10;
      top: 50%;
      left: 50%;
      transform: translate(-550%, 60%);
      font-weight: 700;
      font-size: 36px;
      color: $dark-grey;

      @media (max-width: 768px) {
        font-size: 28px;
      }

      @media (max-width: 480px) {
        font-size: 24px;
      }
    }
  }
}
</style>
