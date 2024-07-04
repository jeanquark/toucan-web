<template>
    <v-row class="justify-center my-5">
        <!-- {{ testimonials[0]['title'] }} -->
        <v-col cols="12" md="10" lg="8" class="my-3">
            <ClientOnly>
            <v-card>
                <v-tabs bg-color="primary" align-tabs="center" stacked height="100" slider-color="white" v-model="tab">
                    <v-tab value="one" class="text-white">
                        <img :src="`images/testimonials/buchillonaucarre-logo.png`" width="40" style="padding: 10px 0px;" />
                        {{ $t('testimonials.0.title') }}
                    </v-tab>
                    <v-tab value="two" class="text-white">
                        <img :src="`images/testimonials/passionetcreations-logo.png`" width="40" style="padding: 10px 0px;" />
                        {{ $t('testimonials.1.title') }}
                    </v-tab>
                </v-tabs>

                <v-card-text>
                    <v-tabs-window v-model="tab">
                        <v-tabs-window-item value="one">
                            <!-- {{ testimonials[0]['title'] }} -->
                            <!-- {{ $t('testimonials.0.content') }} -->
                            <!-- One -->
                            <v-row no-gutters>
                                <v-col cols="12" md="4" style="cursor: pointer;">
                                    <img :src="`images/testimonials/buchillonaucarre.jpg`" width="100%" />
                                </v-col>
                                <v-col cols="12" md="8">
                                    <v-card-text style="line-height: 2em; padding: 40px;">
                                        "<i> {{ $t('testimonials.0.content') }} </i>"
                                    </v-card-text>
                                </v-col>
                            </v-row>
                        </v-tabs-window-item>

                        <v-tabs-window-item value="two">
                            <v-row no-gutters>
                                <v-col cols="12" md="4" style="cursor: pointer;">
                                    <img :src="`images/testimonials/passionetcreations.jpg`" width="100%" />
                                </v-col>
                                <v-col cols="12" md="8">
                                    <v-card-text style="line-height: 2em; padding: 40px;">
                                        "<i> {{ $t('testimonials.1.content') }} </i>"
                                    </v-card-text>
                                </v-col>
                            </v-row>
                        </v-tabs-window-item>
                    </v-tabs-window>
                </v-card-text>
            </v-card>
            </ClientOnly>

            <!-- <v-tabs centered dark icons-and-text  background-color="primary" height="100" v-model="tab">
                    <v-tabs-slider style="height: 5px;"></v-tabs-slider>

                    <v-tab v-for="index in 2" :key="index" :href="`#tab-${index}`" ripple class="white--text">
                        {{ $t(testimonials[index - 1]) ? $t(testimonials[index - 1]['title']) : '' }}
                        <img :src="`images/testimonials/${testimonials[index - 1]['image-logo']}`" width="40" style="padding: 10px 0px;" v-if="testimonials[index - 1]" />
                    </v-tab>
                </v-tabs>

                <v-tabs-items v-model="tab">
                    <v-tab-item v-for="index in 2" :key="index" :value="`tab-${index}`">
                        <v-card flat>
                            <v-row no-gutters v-if="testimonials[index - 1]">
                                <v-col cols="12" md="4" style="cursor: pointer;">
                                    <img :src="`images/testimonials/${testimonials[index - 1]['image']}`" width="100%" />
                                </v-col>
                                <v-col cols="12" md="8">
                                    <v-card-text style="line-height: 2em; padding: 40px;">
                                        "<i> {{ $t(testimonials[index - 1]['content']) }} </i>"
                                    </v-card-text>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-tab-item>
                </v-tabs-items> -->
        </v-col>
    </v-row>
</template>

<script setup lang="ts">
const { t } = useI18n()
const tab = ref(null)

onMounted(() => {
    try {
        // console.log(t('company.title'))
        console.log(t('testimonials2.0.title'))
        // console.log(t('testimonials'[0]))
    } catch (error) {
        console.log('error: ', error);
    }
})

const testimonials = computed(() => {
    return t('testimonials')
    // return 'abc'
})
// export default {
//     data() {
//         return {
//             tab: null
//         }
//     },
//     computed: {
//         testimonials () {
//             return this.$t('testimonials')
//         }
//     }
// }
</script>
