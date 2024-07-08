import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
	generate: {
		nojekyll: true, //not working on this version
	},
	ssr: true, //server side rendered enabled //When true
	target: "static", // and static, nuxt generates a hybrid static site
	app: {
		// baseURL: '/toucan-web/', // For deployment to jeanquark.github.io/toucan-web 
		// buildAssetsDir: 'assets', // don't use "_" at the begining of the folder name to avoids nojkill conflict
		// baseURL: '/',
		// target: 'static',
		head: {
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
			title: 'Toucan Web',
			description: '',
			keywords: 'Web development, Web design',
			link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
			referrer: 'content=origin'
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
		'@nuxtjs/i18n',
		// '@nuxtjs/recaptcha'
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
	experimental: { inlineSSRStyles: false },
	vite: {
		vue: {
			template: {
				transformAssetUrls,
			},
		},
	},
})
