<template>
    <v-row class="justify-center my-5">
        <v-col cols="12" md="10" lg="10" class="my-3">
            <ClientOnly>
                <v-card>
                    <v-tabs bg-color="primary" align-tabs="center" stacked height="100" slider-color="white" v-model="tab">
                        <v-tab value="one">
                            <img :src="`images/testimonials/buchillonaucarre-logo.png`" width="40" style="padding: 10px 0px" />
                            <p class="text-white">{{ $t('testimonials.0.title') }}</p>
                        </v-tab>
                        <v-tab value="two">
                            <img :src="`images/testimonials/passionetcreations-logo.png`" width="40" style="padding: 10px 0px" />
                            <p class="text-white">{{ $t('testimonials.1.title') }}</p>
                        </v-tab>
                    </v-tabs>

                    <v-card-text>
                        <v-tabs-window v-model="tab">
                            <v-tabs-window-item value="one">
                                <!-- One -->
                                <v-row no-gutters>
                                    <v-col cols="12" md="4" style="cursor: pointer">
                                        <img :src="`images/testimonials/buchillonaucarre.jpg`" width="100%" />
                                    </v-col>
                                    <v-col cols="12" md="8">
                                        <v-card-text style="line-height: 2em; padding: 40px">
                                            "<i> {{ $t('testimonials.0.content') }} </i>"
                                        </v-card-text>
                                    </v-col>
                                </v-row>
                            </v-tabs-window-item>

                            <v-tabs-window-item value="two">
                                <v-row no-gutters>
                                    <v-col cols="12" md="4" style="cursor: pointer">
                                        <img :src="`images/testimonials/passionetcreations.jpg`" width="100%" />
                                    </v-col>
                                    <v-col cols="12" md="8">
                                        <v-card-text style="line-height: 2em; padding: 40px">
                                            "<i> {{ $t('testimonials.1.content') }} </i>"
                                        </v-card-text>
                                    </v-col>
                                </v-row>
                            </v-tabs-window-item>
                        </v-tabs-window>
                    </v-card-text>
                </v-card>
            </ClientOnly>
        </v-col>
    </v-row>
</template>

<script setup lang="ts">
const { t } = useI18n()
const tab = ref(null)

onMounted(() => {
    try {
        // console.log(t('company.title'))
        // console.log(t('testimonials2.0.title'))
        // console.log(t('testimonials'[0]))
    } catch (error) {
        console.log('error: ', error)
    }
})

const testimonials = computed(() => {
    return t('testimonials')
    // return 'abc'
})
</script>
