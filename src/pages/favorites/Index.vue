<script setup>
import FaveritesGalery from './FaveritesGalery.vue';
import TitleSection from 'src/components/ux/TitleSection.vue';
</script>
<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-neutral-900 dark:to-neutral-800">
    <TitleSection :title="'Favoritos'" :subtitle="'Seus gifs favoritos aqui'"/>
    <FaveritesGalery />
  </div>
</template>
