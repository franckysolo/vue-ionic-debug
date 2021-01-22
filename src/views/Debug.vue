<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Ion Select Issue</ion-title>
        <ion-back-button slot="end"></ion-back-button>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Ion Select Issue</ion-title>
        </ion-toolbar>
      </ion-header>
      <div id="container">
        <ion-item-divider>
         <ion-label>
           ion-select with fixed value
         </ion-label>
       </ion-item-divider>
        <ion-item>
          <ion-label>Choose a country with native ion-select with fixed value</ion-label>
          <ion-select name="country_id" interface="popover" value="2">
             <ion-select-option value="1">Canada</ion-select-option>
             <ion-select-option value="2">France</ion-select-option>
             <ion-select-option value="3">United-States</ion-select-option>
          </ion-select>
        </ion-item>
        <ion-item-divider>
         <ion-label>
           ion-select with string variable value
         </ion-label>
       </ion-item-divider>
        <ion-item>
          <ion-label>Choose a country with native ion-select with fixed value</ion-label>
          <ion-select name="country0_id" interface="popover" :value="stringId">
             <ion-select-option value="1">Canada</ion-select-option>
             <ion-select-option value="2">France</ion-select-option>
             <ion-select-option value="3">United-States</ion-select-option>
          </ion-select>
        </ion-item>
        <ion-item-divider>
         <ion-label>
           ion-select native with int variable value
         </ion-label>
       </ion-item-divider>
        <ion-item>
          <ion-label>Choose a country with native ion-select</ion-label>
          <ion-select name="country1_id" interface="popover" :value="cid.toString()">
             <ion-select-option value="1">Canada</ion-select-option>
             <ion-select-option value="2">France</ion-select-option>
             <ion-select-option value="3">United-States</ion-select-option>
          </ion-select>
        </ion-item>
        <ion-item-divider>
         <ion-label>
           vee-validate and ion-select
         </ion-label>
        </ion-item-divider>
        <Form v-slot="{ errors }">
        <ion-item>
            <ion-label>Choose a country with vee-validate and ion-select with fixed value</ion-label>
            <Field name="country2_id" v-slot="{ field }">
              <ion-select name="country2_id" interface="popover" v-bind="field" value="2">
                 <ion-select-option value="1">Canada</ion-select-option>
                 <ion-select-option value="2">France</ion-select-option>
                 <ion-select-option value="3">United-States</ion-select-option>
              </ion-select>
            </Field>
          </ion-item>
          <pre v-if="errors">
            {{ errors }}
          </pre>
        </Form>
        <ion-item-divider>
         <ion-label>
           vee-validate ion-select with initial values
         </ion-label>
        </ion-item-divider>

        <Form v-slot="{ errors }" :initial-values="form">
          <ion-item>
            <ion-label>Choose a country with vee-validate and ion-select</ion-label>
            <Field name="country" v-slot="{ field }">
              <ion-select interface="popover" v-bind="field">
                 <ion-select-option value="1">Canada</ion-select-option>
                 <ion-select-option value="2">France</ion-select-option>
                 <ion-select-option value="3">United-States</ion-select-option>
              </ion-select>
            </Field>
          </ion-item>
          <pre v-if="errors">
            {{ errors }}
          </pre>
        </Form>

      </div>
      <pre>
        Country ID {{ countryId }}
      </pre>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonBackButton,
  IonLabel,
  IonItemDivider,
  IonSelect,
  IonSelectOption,
  IonItem
} from '@ionic/vue'

import { defineComponent, ref, reactive } from 'vue'
import { Field, Form } from 'vee-validate'


export default defineComponent({
  name: 'Debug',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonBackButton,
    IonLabel,
    IonItemDivider,
    IonSelect,
    IonSelectOption,
    IonItem,
    Field,
    Form
  },
  setup () {

      const countryId = ref(2)
      const form = reactive({
        country: ''
      });

      form['country'] = '2'

      return {
        form,
        countryId
      }
  },
  data () {
    return {
      cid: 2,
      stringId: '2'
    }
  }
})
</script>
