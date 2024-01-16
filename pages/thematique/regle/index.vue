<template>
  <LayoutComponent>
    <ion-content :fullscreen="true">
      <RuleListComponent :rules="thematique.rules" />
    </ion-content>
  </LayoutComponent>
</template>

<script lang="ts" setup>
const thematique = useThematique();
</script>

<style scoped>
ion-content {
  --background: var(--ion-color-light) url("/images/sprite1.png") no-repeat center center / cover;
  position: relative;
}
</style>
