<template lang="html">
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Ion Input Issue</ion-title>
        <ion-back-button slot="end"></ion-back-button>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-spinner name="dots" v-if="loading" />
      <p v-else>I am loaded</p>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonBackButton, IonSpinner } from '@ionic/vue'
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'LifeCycle',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonSpinner,
    IonBackButton
  },
  setup () {
    const loading = ref(false)
    return {
      loading
    }
  },
  ionViewWillEnter()  {
    // eslint-disable-next-line
    console.log('Vehicles page will enter');
    this.loading = true
  },
  ionViewDidEnter() {
    // eslint-disable-next-line
    console.log('Vehicles page did enter');
    this.loading = false
  }

})
</script>
