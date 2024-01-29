<template>
  <LayoutComponent>
    <ion-content :fullscreen="true">
      <HarcelementRuleList :rules="rules" />
      <ion-row class="ion-justify-content-center ion-margin-top">
        <ion-col size="7">
          <ion-img src="/images/benevoles-writing.png"></ion-img>
        </ion-col>
      </ion-row>
    </ion-content>
  </LayoutComponent>
</template>

<script lang="ts" setup>
import type { HarcelementRule } from "~/types/global";

const { data: harcelements } = await useFetch<HarcelementRule[]>("/json/harcelements.json");
const rules = useHarcelements();
rules.value = harcelements.value!;
</script>

<style scoped>
ion-content {
  --background: var(--ion-color-light) url("/images/sprite2.png") no-repeat center center / cover;
}
</style>
