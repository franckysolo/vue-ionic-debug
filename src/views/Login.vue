<template lang="html">
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Ion Input Issue</ion-title>
        <ion-back-button slot="end"></ion-back-button>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <v-form
        v-slot="{ errors, values, handleSubmit }"
        :validation-schema="schema"
        :initial-values="form"
        @submit.prevent="handleSubmit($event, onSubmit)">
        <ion-item>
          <ion-label position="floating">Email</ion-label>
          <v-field name="email" as="ion-input" autocapitalize="words"/>
          <v-error name="email" />
        </ion-item>
        <ion-item>
          <ion-label position="floating">Mot de passe</ion-label>
          <v-field name="password" as="ion-input" type="password"/>
          <v-error name="password" />
        </ion-item>
        <ion-item>
          <ion-button type="submit">
            Tester
          </ion-button>
        </ion-item>
        <pre v-if="errors">
          {{ values }}
          {{ errors }}
        </pre>
      </v-form>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonBackButton, IonButton } from '@ionic/vue'
import { defineComponent, reactive } from 'vue';
import { Field as vField, Form as vForm, ErrorMessage as vError } from 'vee-validate'
export default defineComponent({
  name: 'Login',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonBackButton,
    IonButton,
    vField,
    vError,
    vForm
  },
  setup () {
    const form = reactive({
      email: '',
      login: '',
    })

    const schema = {
      email: 'required|email',
      password: 'required|min:6|max:191',
    }

    const onSubmit = async (values) => {
      console.info(values)
    }

    return {
      schema,
      onSubmit,
      form
    }
  }
})
</script>

<style lang="css" scoped>
</style>
