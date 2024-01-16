<template>
  <LayoutComponent>
    <ion-content :fullscreen="true" class="ion-padding" color="light">
      <RuleComponent :rule="rule" />
    </ion-content>
  </LayoutComponent>
</template>

<script lang="ts" setup>
const id = Number(useRouter().currentRoute.value.params.id);
const thematique = useThematique();
const rule = thematique.value.rules.filter((rule) => rule.id === id).at(0)!;
</script>

<style scoped></style>
