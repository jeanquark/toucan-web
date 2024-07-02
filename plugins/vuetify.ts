// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify, ThemeDefinition } from 'vuetify'

const lightTheme: ThemeDefinition = {
    dark: false,
    colors: {
        primary: "#7A528F", // light purple
        secondary: "#FFC107", // amber
        tertiary: "#E11566", // pink
        dark: "#7E7E7E", // dark-grey
        background: "#ECECEC", // white,
        text: "#000000", // black
        lighten: "#87639A", // light primary
        accent: "#493155" // dark primary
    },
};

const darkTheme: ThemeDefinition = {
    dark: true,
    colors: {
        primary: "#7A528F", // light purple
        secondary: "#FFC107", // amber
        tertiary: "#E11566", // pink
        dark: "#CCCCCC", // light-grey
        background: "#424242", // dark
        text: "#FFFFFF", // white
        lighten: "#87639A", // light primary
        accent: "#493155" // dark primary
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