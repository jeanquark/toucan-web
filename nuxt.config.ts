import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
	// generate:{
	// 	nojekyll: true, //not working on this version
	//   },
	// ssr: true,
	// target: "static",
	app: {
		baseURL: '/toucan-web/', // baseURL: '/<repository>/'
		buildAssetsDir: 'assets', // don't use "_" at the begining of the folder name to avoids nojkill conflict
		head: {
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
			title: 'Toucan Web',
			description: 'A company that provides web services',
			referrer: 'content=origin',
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
