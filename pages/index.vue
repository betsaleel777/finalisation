<template>
  <LayoutComponent>
    <ion-content :fullscreen="true" color="light">
      <div class="image-top">
        <ion-img src="/images/sprite2.png"></ion-img>
      </div>
      <ThematiqueListComponent />
      <div class="image-bottom">
        <ion-img src="/images/sprite1.png"></ion-img>
      </div>
    </ion-content>
  </LayoutComponent>
</template>

<script setup>
definePageMeta({
  alias: ["/index", "/"],
});
</script>

<style scoped>
ion-img {
  max-width: 100%;
  max-height: 100%;
}
.image-top {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  margin-bottom: -3vh;
}
.image-bottom {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  margin-top: -3vh;
}
</style>
