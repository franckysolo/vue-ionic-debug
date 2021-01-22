import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

// vee-validate
import * as rules from '@vee-validate/rules'
import { configure, defineRule } from 'vee-validate'
import en from '@vee-validate/i18n/dist/locale/en.json'
import { localize } from '@vee-validate/i18n'

configure({
 generateMessage: localize({
   en: Object.assign(en, {
     messages: {
       vin_length: 'VIN must contains 17 characters',
       vin_invalid_letters: 'VIN must contains valid letters',
       vin_invalid_chars: 'VIN must contains valid characters',
     }
   })
 })
})

Object.keys(rules).forEach(rule => {
  defineRule(rule, rules[rule])
})

// vin
defineRule('vin_length', value => {
   if (value && value.length === 17) {
     return true
   }
})

defineRule('vin_invalid_letters', value => {
    const regex = new RegExp(/([OIQ])/)
    const found = value.match(regex)
    if (found && found.length > 0) {
      return false
    }

    return true
})

defineRule('vin_invalid_chars', value => {
  const regex = new RegExp(/([^A-Z0-9])/)
  const found = value.match(regex)
  if (found && found.length > 0) {
    return false
  }

  return true
})


const app = createApp(App)
  .use(IonicVue)
  .use(router);

router.isReady().then(() => {
  app.mount('#app');
});
