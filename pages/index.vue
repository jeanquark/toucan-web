<template>
    <v-row no-gutters>
        <v-parallax src="public/images/image2-2600-min.jpg" max-height="600"
            alt="People working in office (cartoonish)"></v-parallax>
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
    <v-row no-gutters>
        <v-parallax src="public/images/image3-2600-min.jpg" height="380" loading="lazy"
            alt="People around desk at the office (cartoonish)"></v-parallax>
    </v-row>
    <packages />
    <testimonials />
    <v-row no-gutters class="justify-center mb-2">
        <v-col cols="12" sm="10">
            <v-row no-gutters class="justify-center border-xl">
                <team />
                <contact />
            </v-row>
        </v-col>
    </v-row>
    <!-- </v-app> -->
</template>

<script setup lang="ts">

onMounted(async () => {
    try {
        // console.log('onMounted')
    } catch (error) {
        console.log('[/index] error: ', error)
    }
})

// Data

// Computed properties

// Methods
</script>

<style scoped></style>
