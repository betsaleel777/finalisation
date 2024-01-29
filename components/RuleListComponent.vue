<script lang="ts" setup>
import type { Rule } from "~/types/global";
const props = defineProps<{ rules: Rule[] }>();
</script>

<template>
  <ion-card v-for="rule in props.rules">
    <ion-card-content class="ion-no-padding">
      <ion-item :router-link="`/thematique/regle/${rule.id}`" lines="none" button :detail="false">
        <span class="number" slot="start">{{ rule.id }}</span>
        <ion-label class="ion-text-justify">
          <ion-text>
            {{ rule.title }}
          </ion-text>
        </ion-label>
      </ion-item>
    </ion-card-content>
  </ion-card>
</template>

<style scoped>
ion-item {
  --padding: 0px;
}
.number {
  background-color: transparent;
  height: 37px;
  width: 37px;
  border-radius: 100%;
  border-style: solid;
  border-color: var(--ion-color-warning);
  color: var(--ion-color-light);
  line-height: 50%;
  margin-right: 10px;
  text-align: center;
  color: var(--ion-color-warning);
  font-size: larger;
  font-weight: bold;
  padding-top: 11px;
  font-family: "Inter";
  font-weight: 500;
}
ion-card {
  opacity: 0.9;
}
ion-text {
  font-family: "Raleway";
  font-weight: 500;
}
</style>
