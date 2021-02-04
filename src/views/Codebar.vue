<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Blank</ion-title>
        <ion-back-button slot="end"></ion-back-button>
      </ion-toolbar>
    </ion-header>
    <div class="ion-padding">
      <ion-button @click="startScan">Scanner un code barre</ion-button>

      <pre>
        vinData {{ vinData }}
      </pre>
    </div>
  </ion-page>
</template>

<script>
import {
  defineComponent,
  ref
} from 'vue'
import {
  IonHeader,
  IonTitle,
  IonButton,
  IonToolbar,
  IonPage,
//  IonContent,
  IonBackButton
} from '@ionic/vue'

import { Plugins } from '@capacitor/core'

export default defineComponent({
  name: 'Codebar',
  components: {
    IonHeader,
    IonTitle,
    IonButton,
    IonToolbar,
    IonPage,
    IonBackButton,
  //  IonContent
  },

  setup() {
    const vinData = ref('')
    const { BarcodeScanner } = Plugins

    console.log(BarcodeScanner)

    const startScan = async () => {
      // make background of WebView transparent
    //  BarcodeScanner.hideBackground()
      // let oldBg = document.body.style.background
      // document.body.style.background = "transparent"
      // start scanning and wait for a result
      const result = await BarcodeScanner.startScan()

      if (result.hasContent) {
        console.log(result.content)
        vinData.value = result.content
    //    document.body.style.background = oldBg
      }
    }

    return {
      vinData,
      startScan
    }
  }
})
</script>

<style lang="css" scoped>
</style>
