<template>
    <v-app id="app">
        <v-row no-gutters justify="center" class="mt-2 mb-5">
            <v-col cols="12" md="8" lg="6" class="px-2">
                <h1 class="text-center mb-4">Toucan Web</h1>
                <p class="text-body-1" style="line-height: 2.0em"></p>
                <v-btn color="primary">Button</v-btn>
                {{ $t('motto') }}
            </v-col>
        </v-row>
        <v-row>
            <v-parallax src="/images/image2-2600-min.jpg" max-height="600" loading="eager"
                alt="peope working in office (cartoonish)"></v-parallax>
            <!-- <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-parallax> -->
            <!-- <v-parallax
                srcset="/images/image2-800-min.jpg 800w,
                            /images/image2-1200-min.jpg 1200w,
                            /images/image2-1600-min.jpg 1600w,
                            /images/image2-2200-min.jpg 2200w,
                            /images/image2-2600-min.jpg 2600w,
                            /images/image2-3200-min.jpg 3200w"
                max-height="600"
                loading="eager"
                alt="peope working in office (cartoonish)"
            ></v-parallax> -->
        </v-row>
        <v-row>
            <what-we-do></what-we-do>
        </v-row>
    </v-app>
</template>

<script setup lang="ts">
import WhatWeDo from '~/components/WhatWeDo.vue'

// definePageMeta({
//     layout: "frontend",
//     auth: false,
// });

// Data

onMounted(async () => {
    try {
    } catch (error) {
        console.log('[/index] error: ', error);
    }
})

// Computed properties

// Methods

</script>

<style scoped></style>
