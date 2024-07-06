import { VueReCaptcha } from 'vue-recaptcha-v3';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueReCaptcha, {
        siteKey: '6Ldi7wkqAAAAACaIZd-mu80g-Av7r_4oJQPy4jjV',
    });
});