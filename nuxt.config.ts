import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
		transpile: ['vuetify'],
	},
  modules: [
		(_options, nuxt) => {
			nuxt.hooks.hook('vite:extendConfig', (config) => {
				// @ts-expect-error
				config.plugins.push(vuetify({ autoImport: true }))
			})
		},
    '@nuxtjs/i18n'
		// '@vee-validate/nuxt'
	],
  i18n: {
		lazy: true,
		langDir: "locales",
		defaultLocale: "en",
		locales: [
			{
				name: "English",
				code: "en",
				iso: "en-US",
				file: 'en.ts',
			},
			{
				name: 'Français',
				code: 'fr',
				iso: 'fr-FR',
				file: 'fr.ts'
			}
		],
		strategy: "prefix_except_default",
		detectBrowserLanguage: false,
		compilation: {
			strictMessage: false,
		},
	},
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
