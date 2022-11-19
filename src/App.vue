<script setup>
import TabBar from "./components/TabBar/TabBar.vue"
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <router-view />
  <tab-bar v-if="route.meta.showTabBar"/>
</template>

<style scoped>
</style>
