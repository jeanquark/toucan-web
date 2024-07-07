<template>
    <!-- Large screens -->
    <v-row no-gutters class="justify-center hidden-sm-and-down">
        <v-col cols="12" sm="10" class="my-3">
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
                        <p>{{ $t(`activities[${index - 1}].title`) }}</p>
                    </v-col>
                </v-row>
                <v-row no-gutters>
                    <v-col cols="12" md="4" class="text-body-1 text-justify my-2 px-4" v-for="index in 3" :key="index">
                        <p>{{ $t(`activities[${index - 1}].content`) }}</p>
                    </v-col>
                </v-row>
            </v-card>
        </v-col>
    </v-row>

    <!-- Small screens -->
    <v-row no-gutters class="hidden-md-and-up">
        <v-card flat class="" v-for="index in 3" :key="index">
            <v-row no-gutters class="mt-3">
                <v-col cols="12" class="text-center">
                    <v-icon :icon="icons[index - 1]" size="80" :color="'primary'" />
                </v-col>
            </v-row>
            <v-row no-gutters class="my-2">
                <v-col cols="12" class="text-h5 text-center">
                    <div class="headline">{{ $t(`activities[${index - 1}].title`) }}</div>
                </v-col>
            </v-row>
            <v-row no-gutters class="mb-3">
                <v-col cols="12" class="text-body-1 text-justify px-2">
                    {{ $t(`activities[${index - 1}].content`) }}
                </v-col>
            </v-row>
        </v-card>
    </v-row>
</template>

<script setup lang="ts">
const { t } = useI18n()
const icons = ref<string[]>(['mdi-laptop', 'mdi-palette', 'mdi-chart-bar'])
</script>

<style scoped></style>
