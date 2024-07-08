<template>
    <v-app id="app" style="">
        <v-toolbar color="white" v-cloak class="py-1" style="border: 0px solid darkred;">
            <v-toolbar-title>
                <v-img src="/images/logo_small.png" alt="Toucan Web logo" width="150" />
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="text-center">
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
                <v-col cols="12" class="py-3 text-center text-h6 text-white">
                    &copy;{{ new Date().getFullYear() }} — <strong class="text-white">Toucan Web</strong><img src="/public/images/swiss_flag.png" width="10px" style="vertical-align: top" />
                </v-col>
            </v-row>
        </v-footer>
    </v-app>
</template>

<!-- <script src="https://www.google.com/recaptcha/api.js" async defer></script> -->
<script setup lang="ts">

const router = useRouter()
const { t, locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

// definePageMeta({
// });

const fixed = ref(false)

// computed proprties
const activeLocale: any = computed((): any => {
    return locale.value
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
