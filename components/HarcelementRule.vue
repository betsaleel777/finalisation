<script lang="ts" setup>
import type { HarcelementRule } from "~/types/global";

const props = defineProps<{ rule: HarcelementRule }>();
</script>

<template>
  <div class="ion-text-center titre">
    <ion-label color="success"
      ><b>{{ props.rule.id }}.{{ props.rule.title }}</b></ion-label
    >
  </div>
  <ion-card color="light" class="carte">
    <ion-card-content class="card-content" v-if="props.rule.id === 4">
      <p class="ion-text-justify rule-text">
        <ion-text class="read-font">
          Si tu es témoin de harcèlement et que tu te sens en sécurité, n’hésite pas à intervenir avec l’une
          des méthodes contre le harcèlement de rue ci-dessous.
          <ol start="1">
            <li>
              <strong>Distrais</strong> le harceleur en détournant son attention: fais semblant de connaître
              la personne harcelée, demande l’heure ou crée une distraction: sois créatif·ve.
            </li>
            <li>
              <strong>Délègue</strong> à une personne qui représente une forme d’autorité si tu te sens pas
              capable d’intervenir toi-même (policier, agent de sécurité, chauffeur de bus, propriétaire d’un
              commerce); demande à cette personne de t’aider à intervenir.
            </li>
            <li>
              <strong>Documente</strong>: c’est-à-dire filme discrètement la scène et propose à la victime de
              lui fournir la preuve ou de témoigner. Attention: Ne jamais publier sans le consentement de la
              victime.
            </li>
            <li>
              <strong>Dirige</strong>: demande au harceleur d’arrêter, demande-lui de s’en aller tout en
              rassurant la victime, demande de l’aide en évitant de confronter te directement.
            </li>
            <li>
              <strong>Dialogue</strong>: réconforte la personne harcelée après coup , réconforte-la , dis-lui
              que ce qu’elle à vécu n’est pas acceptable.
            </li>
          </ol>
        </ion-text>
      </p>
    </ion-card-content>
    <ion-card-content class="card-content" v-else-if="props.rule.id === 5">
      <p class="ion-text-justify rule-text">
        <ion-text class="read-font">
          Se taire, c’est laisser faire: <br />
          Il est possible de trouver de l’aide et de signaler les cas, avec les moyens suivants:
          <ul>
            <li>Le module de signalement intégré dans l’application officielle Akwaba Ci</li>
            <li>Les stands Akwaba Mousso sur les Fan Zones de Koumassi et Yopougon</li>
            <li>Akwaba Mousso a un site web, est sur Facebook et Instagram</li>
          </ul>
        </ion-text>
      </p>
    </ion-card-content>
    <ion-card-content class="card-content" v-else>
      <p class="ion-text-justify rule-text">
        <ion-text class="read-font">
          {{ props.rule.content }}
        </ion-text>
      </p>
    </ion-card-content>
  </ion-card>
  <div class="thematique-image">
    <ion-img src="/images/logo-vbg.png"></ion-img>
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
