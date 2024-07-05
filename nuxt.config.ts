import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
	ssr: true,
	app: {
		head: {
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
			title: 'Toucan Web',
			description: 'A company that provides web services',
			link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
		}
	},
	devtools: { enabled: true },
	build: {
		transpile: ['vuetify'],
	},
	css: ['vuetify/lib/styles/main.sass', '@/assets/main.css'],
	modules: [
		(_options, nuxt) => {
			nuxt.hooks.hook('vite:extendConfig', (config: any) => {
				// @ts-expect-error
				config.plugins.push(vuetify({ autoImport: true }))
			})
		},
		// '@nuxtjs/google-fonts',
		'@nuxtjs/i18n'
		// '@vee-validate/nuxt'
	],
	// googleFonts: {
	// 	// Options
	// },
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
