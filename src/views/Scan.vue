<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Blank</ion-title>
        <ion-back-button slot="end"></ion-back-button>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-button @click="scan">Scanner un code barre</ion-button>
      <div class="ion-padding">
        <v-form
            v-slot="{ errors, values, handleSubmit }"
            :validation-schema="schema"
            :initial-values="form"
            @submit.prevent="handleSubmit($event, onSubmit)">
            <ion-button @click="populateVin">Test random vin</ion-button>

          <v-field name="vin" as="ion-input" v-model="form.vin" placeholder="Enter vin or scan it" />
          <v-error name="vin" />

          <pre>
            initial values {{ form }}
            errors  {{ errors }}
            form values {{ values }}
          </pre>
        </v-form>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  defineComponent
} from 'vue'
import {
  IonHeader,
  IonTitle,
  IonButton,
  IonToolbar,
  IonPage,
//  IonInput,
  IonContent,
  IonBackButton
} from '@ionic/vue'
import { BarcodeScanner } from '@ionic-native/barcode-scanner'
import { Field as vField, Form as vForm, ErrorMessage as vError } from 'vee-validate'
import { sample } from 'lodash'
export default defineComponent({
  name: 'Scan',
  components: {
    IonHeader,
    IonTitle,
    IonButton,
    IonToolbar,
  //  IonInput,
    IonPage,
    IonBackButton,
    IonContent,
    vField,
    vForm,
    vError
  },
  data () {
    return {
      vin: null,
      form: {
        vin: ''
      },
      schema: {
        vin: 'required'
      }
    }
  },
  methods: {
    async populateVin () {
      const vins = [
        '4Y1SL65848Z411439',
        '1GNALDEK9FZ108495',
        '2C4RDGBG6ER405565',
        'WDBNG75J04A417726',
        '1FAHP3F20CL266328',
        '5XYZWDLA4EG145416',
        'JTDKB20U497855273',
      ]
      this.form.vin = sample(vins)
      console.info(this.form.vin)

    },
    async onSubmit (values) {
      console.log(values)
    },
    async scan () {
      try {
        const data = await BarcodeScanner.scan()
        console.info(`Barcode data: ${data.text}`)
        this.form.vin = data.text
      } catch (e) {
        console.info(e)
      }
    }
  }
})
</script>
