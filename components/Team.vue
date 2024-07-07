<template>
    <v-col cols="12" md="10" lg="6" class="">
        <v-card flat>
            <v-card-title primary-title class="layout justify-center">
                <div class="text-h5 text-center">
                    {{ $t('company.title') }}
                </div>
            </v-card-title>
            <v-card-text class="text-body-1">
                {{ $t('company.content') }}
            </v-card-text>
            <br />
            <v-expansion-panels>
                <v-expansion-panel style="box-shadow: none;">
                    <v-expansion-panel-title>
                        <v-row no-gutters class="align-center">
                            <v-col cols="3">
                                <v-avatar :size="100" color="blue-grey-lighten-4">
                                    <v-img alt="Avatar" :src="`./images/teams/jeanmarc.jpg`"></v-img>
                                </v-avatar>
                            </v-col>
                            <v-col cols="9" style="text-align: center;">
                                <div>
                                    <span class="text-primary text-body-1"> {{ $t('team_members.0.name') }} </span><br /><br /><span
                                        class="grey--text text--darken-2">
                                        {{ $t('team_members.0.role') }}
                                    </span>
                                </div>
                            </v-col>
                        </v-row>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text class="text-body-1">
                        {{ $t('team_members.0.content') }}
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel style="box-shadow: none;">
                    <v-expansion-panel-title>
                        <v-row no-gutters class="align-center">
                            <v-col cols="3">
                                <v-avatar :size="100" color="blue-grey-lighten-4">
                                    <v-img alt="Avatar" :src="`images/teams/ivan.jpg`"></v-img>
                                </v-avatar>
                            </v-col>
                            <v-col cols="9" style="text-align: center;">
                                <div>
                                    <span class="text-primary text-body-1"> {{ $t('team_members.1.name') }} </span><br /><br /><span
                                        class="grey--text text--darken-2">
                                        {{ $t('team_members.1.role') }}
                                    </span>
                                </div>
                            </v-col>
                        </v-row>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        {{ $t('team_members.1.content') }}
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel style="box-shadow: none;">
                    <v-expansion-panel-title>
                        <v-row no-gutters class="align-center">
                            <v-col cols="3">
                                <v-avatar :size="100" color="blue-grey-lighten-4">
                                    <v-img alt="Avatar" :src="`./images/teams/mary.jpg`"></v-img>
                                </v-avatar>
                            </v-col>
                            <v-col cols="9" style="text-align: center;">
                                <div>
                                    <span class="text-primary text-body-1"> {{ $t('team_members.2.name') }} </span><br /><br /><span
                                        class="grey--text text--darken-2">
                                        {{ $t('team_members.2.role') }}
                                    </span>
                                </div>
                            </v-col>
                        </v-row>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        {{ $t('team_members.2.content') }}
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-card>
    </v-col>
</template>

<script setup lang="ts">
const { t } = useI18n()
// computed properties
const team_members: any[] = computed<any[]>(() => {
    return t('team_members')
    // return []
})
// export default {
//     data() {
//         return {
//         }
//     },
//     computed: {
//         team_members() {
//             return this.$t('team_members')
//         }
//     }
// }
</script>
