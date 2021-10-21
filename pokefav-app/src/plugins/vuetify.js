import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import es from 'vuetify/es5/locale/es';
import '@/styles/app.scss';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#0172C0',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#de2e2e',
        info: '#2196F3',
        success: '#79B216',
        warning: '#d4ac31'
      },
    },
  },
    lang: {
      locales: { es },
      current: 'es',
    },
});
