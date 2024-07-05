<template>
    <!-- <section> -->
    <!-- Large screens -->
    <v-row no-gutters class="justify-center hidden-sm-and-down">
        <v-col cols="12" sm="10" class="my-3">
            <!-- <v-container grid-list-xl> -->
            <v-card flat class="transparent">
                <v-row no-gutters>
                    <v-col cols="12" md="4" class="text-center my-2">
                        <v-hover>
                            <template v-slot:default="{ isHovering, props }">
                                <v-icon icon="mdi-laptop" size="80" :color="isHovering ? 'secondary' : 'primary'" v-bind="props" />
                            </template>
                        </v-hover>
                    </v-col>
                    <v-col cols="12" md="4" class="text-center">
                        <v-hover>
                            <template v-slot:default="{ isHovering, props }">
                                <v-icon icon="mdi-palette" size="80" :color="isHovering ? 'secondary' : 'primary'" v-bind="props" />
                            </template>
                        </v-hover>
                    </v-col>
                    <v-col cols="12" md="4" class="text-center">
                        <v-hover>
                            <template v-slot:default="{ isHovering, props }">
                                <v-icon icon="mdi-chart-bar" size="80" :color="isHovering ? 'secondary' : 'primary'" v-bind="props" />
                            </template>
                        </v-hover>
                    </v-col>
                </v-row>
                <v-row no-gutters>
                    <v-col cols="12" md="4" class="text-h5 text-center my-4" style="" v-for="index in 3" :key="index">
                            {{ $t(`activities[${index - 1}].title`) }}
                    </v-col>
                </v-row>
                <v-row no-gutters>
                    <v-col cols="12" md="4" class="text-body-1 my-2 px-4" v-for="index in 3" :key="index">
                        {{ $t(`activities[${index - 1}].content`) }}
                    </v-col>
                </v-row>
            </v-card>
            <!-- </v-container> -->
        </v-col>
    </v-row>

    <!-- Small screens -->
    <v-row no-gutters class="hidden-md-and-up">
        <!-- <v-container grid-list-xl> -->
        <!-- <v-layout row wrap align-center> -->
        <!-- <v-flex xs12 md4> -->
        <v-card v-for="index in 3" :key="index" class="elevation-0 transparent">
            <v-card-text class="text-center">
                <v-icon size="3em" :color="index % 2 === 0 ? 'secondary' : 'primary'">{{ icons[index - 1] }}</v-icon>
            </v-card-text>
            <v-card-title primary-title class="layout justify-center">
                <div class="headline">{{ $t(`activities[${index - 1}].title`) }}</div>
            </v-card-title>
            <v-card-text>
                {{ $t(`activities[${index - 1}].content`) }}
            </v-card-text>
        </v-card>
        <!-- </v-flex> -->
        <!-- </v-layout> -->
        <!-- </v-container> -->
    </v-row>
    <!-- </section> -->
</template>

<script setup lang="ts">
const { t } = useI18n()
let icons = ref(['laptop', 'palette', 'chart-bar'])

const availableLocales = computed(() => {
    // return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    return ['en', 'fr']
})
</script>

<style scoped></style>
