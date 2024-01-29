<template>
  <LayoutComponent>
    <ion-content :fullscreen="true">
      <ThematiqueListComponent />
      <ion-row class="ion-justify-content-center">
        <ion-col size="10">
          <ion-text color="dark">
            <em>Cette application a été dévéloppée avec l'appui et la collaboration du PNUD.</em>
          </ion-text>
        </ion-col>
        <ion-col size="1">
          <ion-img class="image-pnud" src="/images/logo-pnud.png"></ion-img>
        </ion-col>
      </ion-row>
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
.image-pnud {
  height: 55px;
  width: 100%;
}
ion-content {
  --background: var(--ion-color-light) url("/images/benevole-can-logo.png") no-repeat center center / cover;
  position: relative;
}
</style>
