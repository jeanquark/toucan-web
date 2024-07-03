// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'
import colors from 'vuetify/util/colors'
import 'vuetify/styles'
import { createVuetify, ThemeDefinition } from 'vuetify'

const lightTheme: ThemeDefinition = {
    dark: false,
    colors: {
        primary: colors.blue.lighten2, //#64B5F6
        accent: colors.grey.darken3,
        secondary: colors.amber.darken1, //#FFB300
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3,
    },
};

const darkTheme: ThemeDefinition = {
    dark: true,
    colors: {
        primary: colors.blue.darken2,
        accent: colors.grey.darken3,
        secondary: colors.amber.darken3,
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3,
    },
};

export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        theme: {
            defaultTheme: "lightTheme",
            themes: {
                lightTheme,
                darkTheme
            }
        }
    })
    app.vueApp.use(vuetify)
})