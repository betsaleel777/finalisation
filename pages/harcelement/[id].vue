<template>
  <LayoutComponent>
    <ion-content :fullscreen="true" class="ion-padding" color="light">
      <HarcelementRule :rule="rule" />
    </ion-content>
  </LayoutComponent>
</template>

<script lang="ts" setup>
const id = Number(useRouter().currentRoute.value.params.id);
const harcelements = useHarcelements();
const rule = harcelements.value.find((harcelement) => harcelement.id === id)!;
</script>

<style scoped></style>
