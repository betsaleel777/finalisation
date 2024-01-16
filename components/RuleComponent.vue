<script lang="ts" setup>
import type { Rule } from "~/types/global";

const props = defineProps<{ rule: Rule }>();
const thematique = useThematique();
</script>

<template>
  <div class="ion-text-center titre">
    <ion-label color="success"
      ><b>{{ props.rule.id }}.{{ props.rule.title }}</b></ion-label
    >
  </div>
  <ion-card color="light" class="carte">
    <ion-card-content class="card-content">
      <p class="ion-text-justify rule-text">
        <ion-text class="read-font">
          {{ props.rule.content }}
        </ion-text>
      </p>
    </ion-card-content>
  </ion-card>
  <div class="thematique-image">
    <ion-img :src="thematique.image"></ion-img>
  </div>
</template>

<style scoped>
.read-font {
  font-family: "Merriweather";
}
.thematique-image {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 15vh;
  max-height: 30vh;
  min-width: 100%;
  margin-top: 3vh;
}
ion-img {
  height: 20%;
  width: 60%;
}
ion-card {
  max-height: 50vh;
  overflow-y: auto;
}
.carte {
  margin-top: 5px;
  margin-bottom: 0px;
}
.carte-content {
  padding: 10px;
}
.titre {
  margin-bottom: 0px;
  padding-inline: 15px;
  font-family: "Poppins";
  font-weight: 500;
}
.rule-text {
  font-size: medium;
}
</style>
