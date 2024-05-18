<template>
  <footer class="footer">
    <div class="footer-container">
      <img src="/logo.svg">
      <p> © alpha, 2023 </p>
    </div>
  </footer>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import '../variables/colors.scss';

.footer {
  width: 100%;
  margin-top: 50px;
  background-color: $white-warm;

  & .footer-container {
    position: relative;
    display: flex;
    align-items: start;
    justify-content: center;
    height: 166px;
    flex-direction: column;
    padding: 0 20px;
    margin-left: 80px;

    p {
      margin-top: 10px;
      color: $grey;
      font-size: 16px;
      font-weight: 400;

      @media (max-width: 768px) {
        font-size: 14px;
      }
    }

    img {
      width: 114px;

      @media (max-width: 1200px) {
        width: 114px;
      }

      @media (max-width: 768px) {
        width: 100px;
      }
    }
  }
}
</style>
