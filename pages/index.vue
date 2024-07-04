<template>
    <v-row>
        <!-- <v-parallax src="/images/image2-2600-min.jpg" max-height="600" loading="eager"
                alt="peope working in office (cartoonish)"></v-parallax> -->
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
    <what-we-do />
    <packages />
    <testimonials />
    <v-row>
        <team />
        <contact />
    </v-row>
    <!-- </v-app> -->
</template>

<script setup lang="ts">

onMounted(async () => {
    try {
        console.log('onMounted')
    } catch (error) {
        console.log('[/index] error: ', error)
    }
})

// Data

// Computed properties

// Methods
</script>

<style scoped></style>
