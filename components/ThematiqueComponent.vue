<script lang="ts" setup>
import type { Thematique } from "~/types/global";
const props = defineProps<{ thematique: Thematique }>();
</script>

<template>
  <div class="ion-text-center">
    <ion-label color="success"> {{ props.thematique.texte }} </ion-label>
  </div>
  <ion-card color="light">
    <div class="image">
      <ion-img src="/images/sprite1.png"></ion-img>
    </div>
    <ion-card-content>
      <p class="ion-text-justify">
        <ion-text class="read-font">
          {{ props.thematique.content }}
        </ion-text>
      </p>
    </ion-card-content>
  </ion-card>
  <ion-row class="ion-justify-content-center">
    <ion-col size="5">
      <ion-button :router-link="`/thematique/regle`" size="small" color="success">
        <ion-icon color="light" :icon="ioniconsList" slot="start"> </ion-icon>
        <ion-text color="light">regles</ion-text>
      </ion-button>
    </ion-col>
  </ion-row>
</template>

<style scoped>
.read-font {
  font-family: "Merriweather";
}
ion-text {
  font-size: larger;
}
ion-label {
  font-size: large;
  text-decoration: underline;
  text-transform: uppercase;
  font-family: "Inter";
  font-weight: 500;
}
ion-button {
  width: 95%;
}
ion-card {
  position: relative;
}
.image {
  position: absolute;
  top: 45%;
  transform: translateY(-50%);
  opacity: 0.2;
}
</style>
