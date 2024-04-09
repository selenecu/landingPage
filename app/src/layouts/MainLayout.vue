<template>
  <q-layout view="lhh LpR lff">
    <q-header reveal>
      <q-toolbar class="text-secondary bg-white" >
      <q-toolbar-title class="text-weight-bold" >
        Don gabriel
      </q-toolbar-title>

      <q-space />
      <q-input outlined dense debounce="300" v-model="filter" placeholder="Buscar" class="q-pa-lg"
         >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      <q-tabs v-model="tab" shrink>
        <q-tab name="tab1" label="Home" />
        <q-tab name="tab2" label="Tab 2" />
        <q-tab name="tab3" label="Tab 3" />
      </q-tabs>
    </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'


defineOptions({
  name: 'MainLayout'
})


const tab = ref('')


</script>

<style lang="scss">


</style>
