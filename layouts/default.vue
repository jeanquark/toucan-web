<template>
    <v-app id="app" v-cloak style="">
        <!-- Lora,sans-serif -->
        <v-toolbar color="white" class="py-1" style="border: 4px solid pink;">
            <v-toolbar-title>
                <img src="../public/images/logo_small.png" alt="Web Toucan logo" width="150" />
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="text-center">
                <!-- <v-menu open-on-hover top offset-y class="text-center">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn text dark v-bind="attrs" v-on="on">
                            <img :src="`/public/images/languages/en.png`" width="40" />
                        </v-btn>
                    </template>

                    <v-hover>
                        <template v-slot:default="{ isHovering, props }">
                            <v-list class="text-center">
                                <v-list-item v-for="(locale, index) in availableLocales" :key="index" style=""
                                    :class="`${isHovering ? 'primary-color' : ''}`">
                                    <nuxt-link :to="'en'" style="margin: 0 auto">
                                        <v-list-item-title style="align-items: center">
                                            <img :src="`/public/images/languages/${locale.code}.png`" width="30" style="" />
                                        </v-list-item-title>
                                    </nuxt-link>
                                </v-list-item>
                            </v-list>
                        </template>
                    </v-hover>
                </v-menu> -->
                <v-menu>
                    <template v-slot:activator="{ props }">
                        <v-btn flat color="primary" class="text-capitalize" v-bind="props">
                            <v-icon left>mdi-translate</v-icon>
                            <span class="text-body-1 text-uppercase">{{ activeLocale }}</span>
                            <v-icon small right>mdi-menu-down</v-icon>
                        </v-btn>
                    </template>
                    <v-list density="compact">
                        <v-list-item v-for="(locale, index) in availableLocales" :key="index" @click="switchLocale(locale)">
                            <template v-slot:prepend>
                                <v-img :src="`images/languages/${locale.code}.png`" :width="30" class="mx-2"></v-img>
                                <!-- <v-img :src="`../public/images/languages/fr.png`" :width="30" class="mx-2"></v-img> -->
                                <!-- <img :src="`../images/languages/fr.png`" width="30" class="mx-2" /> -->
                            </template>
                            <v-list-item-title class="text-body-1 text-uppercase">{{ locale.code }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-toolbar-items>
        </v-toolbar>

        <slot />

        <v-footer :absolute="false" height="auto" color="primary">
            <v-row class="justify-center align-center my-0">
                <v-col cols="12" class="py-3 text-center text-white">
                    &copy;{{ new Date().getFullYear() }} — <strong class="text-white">Toucan Web</strong><img src="/public/images/swiss_flag.png" width="10px" style="vertical-align: top" />
                </v-col>
            </v-row>
        </v-footer>
    </v-app>
</template>

<!-- <script src="https://www.google.com/recaptcha/api.js" async defer></script> -->
<script setup lang="ts">
// import { useTheme } from 'vuetify'

const router = useRouter()
// const theme = useTheme()
const { t, locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

// definePageMeta({
// });

const fixed = ref(false)

// computed proprties
const activeLocale: any = computed((): any => {
    // return this.$i18n.locale
    return locale.value
    return 'en'
})
const availableLocales = computed((): any => {
    const array = locales.value as Array<any>
    return array.filter((i) => i.code !== locale.value)
})

// methods
const switchLocale = (locale: any) => {
    console.log('switchLocale: ', locale)
    router.push({ path: switchLocalePath(locale.code) })
}
</script>

<style>
[v-cloak] > * {
    display: none;
}

[v-cloak]::before {
    content: '';
    /* background: url('images/loader.gif') center no-repeat; */
    background: var(--v-primary-base) center no-repeat;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
</style>

<style scoped>
/* .v-application {
    font-family: "Lora,sans-serif"!important;
} */
.primary-color {
    background: var(--v-primary-base);
}

.secondary-color {
    background: var(--v-secondary-base);
}
</style>
