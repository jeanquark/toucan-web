<template>
    <v-row no-gutters class="justify-center my-5">
        <v-col cols="12" sm="10" class="my-3">
            <v-row no-gutters class="">
                <v-col cols="12" md="4" v-for="i in 3" :key="i">
                    <v-hover>
                        <template v-slot:default="{ isHovering, props }">
                            <v-card flat class="text-white px-2" :color="colors[i - 1]" v-bind="props"
                                :class="`mx-2 elevation-${isHovering ? 10 : 0}`" height="400">
                                <v-card-title primary-title class="justify-center">
                                    <div class="text-center">
                                        <h2 class="text-h4 text-white mt-2 mb-0">{{ $t(`packages[${i - 1}].title`) }}</h2>
                                    </div>
                                </v-card-title>
                                <v-card-text class="" style="padding: 30px">
                                    <v-list subheader style="border: 0px dashed orange">
                                        <v-list-item v-for="j in 3" :key="j">
                                            <template v-slot:prepend>
                                                <v-icon :icon="icons[i - 1][j - 1]" size="x-large" />
                                            </template>
                                            <v-list-item-title style="white-space: normal;">
                                                <slot>
                                                    <p class="text-center">
                                                        {{ $t(`packages[${i - 1}].asset${j}`) }}</p>
                                                </slot>
                                            </v-list-item-title>
                                            <template v-slot:append>
                                                <v-icon :icon="'mdi-check-circle'" color="green" size="x-large" />
                                            </template>
                                        </v-list-item>
                                    </v-list>
                                    <br />
                                    <div class="text-center">
                                        <div class="flip-card">
                                            <div class="flip-card-inner">
                                                <div class="flip-card-front">
                                                    <v-chip label variant="flat" color="pink" class=""><v-icon left
                                                            icon="mdi-label" color="white" class="mr-1" />
                                                        <span class="text-white">CHF {{ prices[i - 1] }}</span>
                                                    </v-chip>
                                                </div>
                                                <div class="flip-card-back">
                                                    <v-chip label variant="flat" color="#FFB300" class="text-white">
                                                        <span class="text-white">{{
                                                            $t('all_inclusive') }}</span><v-icon icon="mdi-check"
                                                            color="green" end></v-icon></v-chip>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </v-card-text>
                            </v-card>
                        </template>
                    </v-hover>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>

<script setup lang="ts">
const prices = ref(['500', "1'500", "2'000+"])
const colors = ref(['#8ac5ff', '#64B5F6', '#1976d2'])
const icons = ref([
    ['mdi-application-settings-outline', 'mdi-email', 'mdi-magnify'],
    ['mdi-application-settings-outline', 'mdi-account-cog', 'mdi-function'],
    ['mdi-application-settings-outline', 'mdi-code-tags', 'mdi-swap-horizontal']
])
</script>

<style scoped>
.icon {
    color: rgba(0, 0, 0, 0.54);
}

.icon-success {
    color: var(--v-success-base);
}

/* Flip card */
.flip-card {
    background-color: transparent;
    /* width: 300px; */
    /* height: 300px; */
    perspective: 1000px;
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}

.flip-card-back {
    /* background-color: #2980b9; */
    /* color: white; */
    transform: rotateY(180deg);
}

.white-space {
    white-space: normal;
}
</style>
