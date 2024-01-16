<script lang="ts" setup></script>

<template>
  <ion-card>
    <ion-card-content class="ion-no-padding">
      <ion-item router-link="/harcelement/liste" lines="none" button :detail="false">
        <ion-icon color="warning" slot="start" size="large" :icon="ioniconsWoman"></ion-icon>
        <ion-label>
          <ion-text>
            <h2>Détection et intervention pour les cas de harcèlement sexuel</h2>
          </ion-text>
        </ion-label>
      </ion-item>
    </ion-card-content>
  </ion-card>
</template>

<style scoped></style>
